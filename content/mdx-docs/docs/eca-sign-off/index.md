---
title: 'Sign the Eclipse Contributor Agreement'
authors: MBoegers, gdams
toc: true
---

To contribute to this project the [Eclipse Contributor Agreement (ECA)](https://www.eclipse.org/legal/ECA.php) must be signed.
This document will walk you through this process.

First, you need to create an Eclipse Foundation account.

1. Go to the [Eclipse Registration page](https://accounts.eclipse.org/user/register)
1. Fill all Required fields and submit
    * Eclipse expects you to use the entered E-Mail address for every contribution, e.g. `user.email` for git
1. Activate your account via the activation link in your mailbox
    * The sender should be **webmaster@eclipse.org** with the subject **Eclipse Account Registration**

You are one step away from becoming an Eclipse Contributor, we just need to sign the ECA.

### Sign the ECA
Signing the ECA is straightforward and is done online.

1. Navigate to the [login page](https://accounts.eclipse.org/user/login) of Eclipse Accounts page
1. Login with your E-Mail address and password
1. Eclipse Accounts navigates you directly to the sign page
    * Read the [ECA](https://www.eclipse.org/legal/ECA.php)
    * Enter the requested information
    * Submit via **Accept** button

Now the Status panel in the upper right corner should show that you signed the Eclipse Contributor Agreement. It should look like this:

![one green dot at Eclipse Contributor Agreement](./Status_signed_ECA.png)

### ECA Sign check failed, but why?
For every pull request, a GitHub Action verifies that the author signed the Eclipse Contributor Agreement.
This can fail if:

* You have not got an Eclipse Account
* You have not signed the Eclipse Contributor Agreement
* You have configured git to use a different E-Mail address than you used to sign the ECA
    * `user.email` setting for git must equal to that used for your Eclipse Foundation account. See [Setting your commit email address](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address) for more information

If none of the above is the case, feel free to reach out to the maintainers.

### How to change the author E-Mail address for existing commits
In order for the ECA check to pass, all commits in the pull request must have been authored with the E-Mail address used to sign the ECA.

To change the author for the last commit:

```bash
git commit --amend --author 'Author Name <author.name@mail.com>' --no-edit
```

To change the author for the last N commits:

```bash
git rebase -i HEAD~4 -x "git commit --amend --author 'Author Name <author.name@mail.com>' --no-edit"
```
