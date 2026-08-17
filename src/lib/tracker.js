// Resume download & view notification service
import { supabase, isSupabaseConfigured } from './supabase';

const NOTIFICATION_EMAIL = 'sanirathod8975@gmail.com';

/**
 * Sends direct email notification to sanirathod8975@gmail.com whenever someone downloads or views the resume
 */
export async function trackResumeAction({ email = '', name = '', company = '', action = 'download', source = 'nav' }) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const userAgent = navigator.userAgent;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const referrer = document.referrer || 'Direct Visit';

  const payload = {
    _subject: `⚡ [Portfolio Alert] Someone ${action === 'download' ? 'Downloaded' : 'Viewed'} Your Résumé!`,
    recipient_email: NOTIFICATION_EMAIL,
    visitor_email: email || 'Not Provided (Direct Download/View)',
    visitor_name: name || 'Visitor',
    visitor_company: company || 'N/A',
    action_type: action.toUpperCase(),
    source_button: source,
    timestamp_ist: `${timestamp} (IST)`,
    screen: screenResolution,
    user_agent: userAgent,
    referrer_url: referrer,
    message: `Hi Sani,\n\nA visitor on your portfolio has ${action === 'download' ? 'DOWNLOADED' : 'VIEWED'} your résumé.\n\nVisitor Details:\n- Email: ${email || 'Anonymous'}\n- Name/Company: ${name || 'N/A'} ${company ? `(${company})` : ''}\n- Source: ${source}\n- Time: ${timestamp} IST\n- Device: ${userAgent}`
  };

  // 1. Send email to sanirathod8975@gmail.com via FormSubmit AJAX (instant delivery)
  try {
    fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(err => console.warn('Email dispatch notice:', err));
  } catch (err) {
    console.warn('Email dispatch warning:', err);
  }

  // 2. Also send backup via Web3Forms if needed
  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'a3d6d071-7c91-4d32-bb2f-652cb9378121', // Public web3forms key fallback
        to_email: NOTIFICATION_EMAIL,
        subject: `[Resume Alert] ${action.toUpperCase()} by ${email || 'Visitor'}`,
        from_name: 'Sani Portfolio Tracker',
        ...payload
      })
    }).catch(() => {});
  } catch {}

  // 3. Save to localStorage & Supabase
  try {
    const history = JSON.parse(localStorage.getItem('portfolio-resume-downloads') || '[]');
    history.unshift({
      email,
      name,
      company,
      action,
      source,
      timestamp,
      userAgent
    });
    localStorage.setItem('portfolio-resume-downloads', JSON.stringify(history.slice(0, 50)));

    if (isSupabaseConfigured && supabase) {
      supabase.from('resume_logs').insert([{
        email: email || null,
        name: name || null,
        company: company || null,
        action,
        source,
        created_at: new Date().toISOString()
      }]).then(() => {});
    }
  } catch (e) {
    console.warn('Storage log notice:', e);
  }

  return true;
}
