# Phase 11 — Contact & Lead Generation

## Contact form
- Captures name, email, company/website, inquiry type, service, budget, timeline and project details.
- Validates required fields in the browser.
- Opens Gmail web compose in a new tab with the recipient, subject and inquiry details pre-filled.
- The visitor must review and press **Send** in Gmail; the portfolio does not send or store messages itself.
- Falls back to the system `mailto:` handler if the browser blocks the Gmail tab.

## Testing
1. Run `npm install` and `npm run dev`.
2. Submit the contact form with valid details.
3. Confirm Gmail opens a new tab with `nishantbhoyar4016@gmail.com` as recipient and the form details in the message.
4. Press Send in Gmail to complete delivery.

If Gmail does not open, allow pop-ups for the local/deployed portfolio domain and ensure the browser is signed in to Gmail.
