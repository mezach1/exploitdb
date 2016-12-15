The Exploit-Database Git Repository
===================================

This is the official repository of [The Exploit Database](https://www.exploit-db.com/), a project sponsored by [Offensive Security](https://www.offensive-security.com/).

The Exploit Database is an archive of public exploits and corresponding vulnerable software, developed for use by penetration testers and vulnerability researchers. Its aim is to serve as the most comprehensive collection of exploits gathered through direct submissions, mailing lists, and other public sources, and present them in a freely-available and easy-to-navigate database. The Exploit Database is a repository for exploits and proof-of-concepts rather than advisories, making it a valuable resource for those who need actionable data right away.

This repository is updated daily with the most recently added submissions. Any additional resources can be found in our [binary sploits repository](https://github.com/offensive-security/exploit-database-bin-sploits).

Included with this repository is the **searchsploit** utility, which will allow you to search through the exploits using one or more terms.

```
root@kali:~# searchsploit -h
  Usage: searchsploit [options] term1 [term2] ... [termN]
Example:
  searchsploit afd windows local
  searchsploit -t oracle windows

=========
 Options
=========
   -c, --case      Perform a case-sensitive search (Default is inSEnsITiVe).
   -e, --exact     Perform an EXACT match on exploit title (Default is AND) [Implies "-t"].
   -h, --help      Show this help screen.
   -j, --json      Show result in JSON format.
   -o, --overflow  Exploit title's are allowed to overflow their columns.
   -p, --path      Show the full path to an exploit (Copies path to clipboard if possible).
   -t, --title     Search just the exploit title (Default is title AND the file's path).
   -u, --update    Update exploit database from git.
   -w, --www       Show URLs to Exploit-DB.com rather than local path.
       --colour    Disable colour highlighting.
       --id        Display EDB-ID value rather than local path.

=======
 Notes
=======
 * Use any number of search terms.
 * Search terms are not case sensitive, and order is irrelevant.
   * Use '-c' if you wish to reduce results by case-sensitive searching.
   * And/Or '-e' if you wish to filter results by using an exact match.
 * Use '-t' to exclude the file's path to filter the search results.
   * Remove false positives (especially when searching numbers/major versions).
 * When updating from git or displaying help, search terms will be ignored.

root@kali:~#
root@kali:~# searchsploit afd windows local
--------------------------------------------------------------------------------- ----------------------------------
 Exploit Title                                                                   |  Path
                                                                                 | (/usr/share/exploitdb/platforms)
--------------------------------------------------------------------------------- ----------------------------------
Microsoft Windows 2003/XP - afd.sys Privilege Escalation Exploit (K-plugin)      | ./windows/local/6757.txt
Microsoft Windows XP - afd.sys Local Kernel Denial of Service                    | ./windows/dos/17133.c
Microsoft Windows XP/2003 - afd.sys Local Privilege Escalation Exploit (MS11-080)| ./windows/local/18176.py
Microsoft Windows - AfdJoinLeaf Privilege Escalation (MS11-080)                  | ./windows/local/21844.rb
Microsoft Windows - afd.sys Dangling Pointer Privilege Escalation (MS14-040)     | ./win_x86/local/39446.py
Microsoft Windows 7 (x64) - afd.sys Privilege Escalation (MS14-040)              | ./win_x86-64/local/39525.py
--------------------------------------------------------------------------------- ----------------------------------
root@kali:~#
```
