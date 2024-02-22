/**
 * https://leetcode.com/problems/unique-email-addresses/description/
 */

function numUniqueEmails(emails: string[]): number {
  const set: Set<string> = new Set();

  for (let i = 0; i < emails.length; i++) {
      let [local, domain] = emails[i].split('@');
      local = local.split('+')[0].replace(/\./g, '');
      set.add(`${local}@${domain}`);
  }

  return set.size;
}