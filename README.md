# APC Applied AI Workshop — Live Idea Board (audience page)

The page attendees open (via a QR code on the presentation) to submit ideas.
It writes to a Firebase Realtime Database; the presenter's deck shows them live.

Nothing here is confidential — a generic idea form plus Firebase *web* config
keys, which are designed to be public. Access is controlled by the database
rules, not by hiding these keys.
