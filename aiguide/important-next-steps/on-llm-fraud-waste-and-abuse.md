# On LLM Fraud, Waste & Abuse

Every LLM-powered product’s abuse potential is different depending on how much flexibility you provide in your user input.&#x20;

Malicious users can harm good users on your platform, and you can incur unnecessary server costs by servicing spammy users that aren't using your product for the right reasons.&#x20;

At LogicLoop, we saw that some users weren't actively malicious but they were using our Ask AI Chatbot to do English homework instead of generating SQL queries. While their usage was not fraudulent, we didn't want to encourage usage that was unrelated to our core product. This kind of gray area is particularly challenging to identify and remediate for most startups unless we invest in good monitoring and alerting.

We needed something that would take less than 10 minutes to set up but gave us the piece of mind of knowing that we'd always be able to detect and act on unwanted user activity.&#x20;

When we released our AI features, we set up Slack alerts using LogicLoop, so we could quickly identify any activity, both for [Product Analytics](on-llm-usage-analytics.md) and Fraud Analytics.

Sure enough, within a few days, we got our first set of alerts firing:

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>LogicLoop Suspicious AI Usage Slack Alert</p></figcaption></figure>

Then, we were able to identify what was going on because we log our AI prompts on our dashboards:

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>LogicLoop Ask AI Misuse Example</p></figcaption></figure>

It was clear that this user was not using the product in the right spirit. Once we determined it was spam, our team was immediately able to disable that user within a matter of minutes, using another LogicLoop rule.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption><p>LogicLoop Disable User Dashboard</p></figcaption></figure>

You need to protect good users and yourself on Day 1, but you can get far with some best practices that easy to implement:

* It’s hard to tell if a user is legit or what’s not legit sometimes, and especially at scale. Activity Dashboards are the first step in understanding and calibrating "normal" user behavior.
* Monitoring goes a long way in detecting unusual activity, and can be as simple as Slack alerts.
* Enable your support team to quickly ban users, domains etc. for a smoother experience that doesn't involve engineering being pulled into incidents.&#x20;

We know several teams that had to pause signups _entirely_ for a few weeks because they were on the receiving end of spam activity, so you'll want to get ahead of that.

{% hint style="info" %}
**If you want to set up alerting workflows for Fraud, Waste & Abuse in 10 minutes, feel free to copy our templates** [**here**](https://app.logicloop.com/setup)**.**
{% endhint %}
