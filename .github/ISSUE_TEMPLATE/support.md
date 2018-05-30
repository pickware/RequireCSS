---
name: Support
about: Use this template if the issue is a request for 2nd level support.

---

<!--
    TEMPLATE TODO:
    * Follow <https://www.notion.so/pickware/Fehlerbeschreibungen-von-Kunden-aufnehmen-56e16414ddbb49169cde4acc3a7edad4>.
    * Follow <https://www.notion.so/pickware/GitHub-Issues-schreiben-bfee9c5ad43c43818693796fa1508f53>.
    * Add the `support` label, see <https://www.notion.so/pickware/Bugs-Kategorisierung-Einordnung-auf-Boards-2e09ab0e766049998b558c1bc2462d6b>.
    * DO NOT add the `inform customer` label.
    * Add the issue to the _Backlog_ project WITHOUT TRIAGING IT.
    * Add the issue to the _Sprint Board_ project.
    * Reference customers and stakeholders (preferably via Gmail mail ID).
-->

### What concern did the customer raise, what are they trying to accomplish and what precludes them from it?

### What are the exact steps required for anyone to reproduce the issue?
<!-- TODO: Add a numbered list of steps on how to get a system to trigger the bug -->

### What has previously been attempted by whom to fix or work around the issue?

### In which environments does the issue occur?

* Shopware:
* PHP:
* Affected plugins:

### Where can one find the credentials for the affected system(s)?
<!-- TODO: Request a backend user with full admin access and full FTP access and test both before opening this issue -->

### Who is affected by this issue (incl. support references) and who is involved?
<!-- TODO: If any, reference customers (via Gmail mail ID), and @-mention everyone who should be involved in this issue -->

* Gmail mail ID:

### What action items are left to be done on this issue?
<!-- TODO: Refine the checklist if there are any specific actions with regard to this issue -->

* [ ] Analyse the problem
* [ ] When analysis on the customer system has been concluded, remove debugging state from customer system with customer consent
* [ ] If necessary, inform the customer of further steps
* If fixable in our code (mark done if not):
    * [ ] Decide whether or not to add a _needs testing_ label
    * [ ] Once a code fix is merged, move to _Awaiting Release_
    * [ ] Alert the Product or the Code Owner for them to decide whether to the fix warrants a new release
    * [ ] Once the fix is released, notify `@VIISON/sales` via at-mention in a comment
* [ ] Sales informs the customer
