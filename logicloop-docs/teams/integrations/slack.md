# Slack

## Slack&#x20;

LogicLoop supports Slack OAuth integration.

### Connect to your Workspace&#x20;

In the left navigation bar, click **Data Sources** and then select **Integrations**. Here you will be able to connect to Slack by choosing **Connect with Service**.

<figure><img src="https://lh5.googleusercontent.com/nOOe-9_9SEcJHB1Y3UmQsSw11dsrgN48aXK5_L3KlEm-viA0ARW5zjE92IVgdgQSG49NNjkjFt8SuY2CDNLug2ieFgNqMkqFcelrT9OgNWXQPhINWNiD1w0eGKSMD5AvRKgGyJiUBMJ7UpE84v5MYYgia1tvXhoEPBjQtBb-_-Wgu9SxV7y2pPUeKVyZsA" alt=""><figcaption></figcaption></figure>

Select Slack as your service and choose **Grant Access**. This will open the Slack OAuth request.

<figure><img src="https://lh6.googleusercontent.com/ESCBlcU1wf7nekVop8InrR490OqLi6xgUOQqxLa3Ueafn3PurFG565xaJqhokPHbYaFcOdXX5OiFzCnhfAMo3GSCqnDgYwSi7eh2po_iDlpu15HtE17E-0w0jvqp8r44YyjJRkLT9BJgNgrTbrGCU2ogMtblTiIB4Uq0vCHZVH_c4oqwmnveunXcRJRyqg" alt=""><figcaption></figcaption></figure>

<figure><img src="https://lh5.googleusercontent.com/Lqaoyq-gtR88pTJMOGyJUVhyJdE4MuQyY01nvHrR6JLDAg84xZIYrcB5EEDlNvyrpyM_o4sbSYCKKw8FLijYkJUhFIGGBiJFdzIWFG0vElG48GFuXI1QpPpn_pFdFzC-VG7YefsyW8nJeQuPUvPlnVumpnBx6ruz1fOfKocvj61f0VbdqqGYDRFEkEYKeQ" alt=""><figcaption></figcaption></figure>

Once you allow LogicLoop access and create your integration, you will see it listed as an active integration.

<figure><img src="https://lh6.googleusercontent.com/5bSlgqWdJfj0xSZPSOfvhotD42905aZJgFGVjj7ZKboJOdH1784N7eVhzQYO3aMBbebO_5nps0ZUuFje4FO5-G_jZx6fxAF0dOcW_HWzbpUNq-hnkdwwfa10QqZ9cB_sJ1FFmzBRwc-CVsn1-zu7a9zug7nGIW2PXdIH4AUucKU7VeH0iChYdgypSTFnEA" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The default capacity for Slack integrations is set at **1000** workspace channels. Should your workspace exceed this limit, kindly reach out to our support team at **support@logicloop.com** for assistance in increasing your channel capacity.
{% endhint %}

### Add Slack as an Action Destination&#x20;

Now that you have Slack integrated into LogicLoop, add it as an action destination. In the left navigation panel, choose **Destinations**. Create an action destination of type Slack and choose your integration.

<figure><img src="https://lh5.googleusercontent.com/qorvP_X7Eh1XSfFHJUoX5VGo6V5N2eghF9wTC7rzymW6Fv90yN2SSLgX3Wk3hLdLRNTNlZlaCvTc_3Fn50oc3TOe6PpIkSusGwzZEwUQXnd1mJeoHbxJfuFbBIvMEJ8OIaoGCKzw26eEEKumzmC6o5vr6TQIK4iTAxnyA3zRvd-B02n1uFBqTx55OqlrlQ" alt=""><figcaption></figcaption></figure>

<figure><img src="https://lh4.googleusercontent.com/B_dK0fak8sgkeKmVrb2QmHsKgEURlQZ8tfbVOJEXhzfystgJWHjoZze0KPPJLE0Ym3iHPfCoPxGMNzKzcJdARsKUlTLgepLp3Civ8fpENPwMcHcCEOBclopI8BlP_9Su9UX6_2mg3ZJfVLDKUjXLBNb9iDIWVt8F4Ex264MJaExv4XRY2i9u0hcjtk0MTg" alt=""><figcaption></figcaption></figure>

### Choose your Channel in an Action&#x20;

Add an action to a rule by clicking the **+ Add Action** button in the bottom left corner of the [Rule](../../queries/rules/) source view. Your Slack workspace will now be an available destination.

<figure><img src="https://lh6.googleusercontent.com/ais7819dYnFxcKrJUGfMLqKovlhefhfTd9lfwKWJEMRSX4A9_Zs2-uQ62aU8gP9y7Vp0bW_DVUQbM6WvNLxBe4aQovWvJ4gtAY93WxkFaV5sWsG8vBbvf5wZ5fISQ_kjYCrxsZUmAKhjl2t0kuNJpDmDOHJHFf064ovVIGjYoPTUNKp2Di059wxejhgxeA" alt=""><figcaption></figcaption></figure>

When configuring your action subscription, you will be able to choose the channel to which you want to post your alerts. You can customize the format of the data you pass through to your Slack alert using our [templating guide](../../actions/templating.md).

<figure><img src="https://lh3.googleusercontent.com/y_Vy95KH49ymG05ipiltn7ebV0kzqslZQdn8h7x8AaWJSP1Z6yfcooqYP6h-AtnGxFOpXKph5ms8qsZvw2Z93jhzHEJ9JXdgZW0VVYi4Xoia2rYfq9UpJUtESN6CULfdWQZm2br8hy4awKJCeYqhvm1HI4_XE2WeWQt80dSWPLTdE1g7l7eBAJKoq7R2ug" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Only one OAuth integration per type (ex. Slack, Google Sheets) is supported at a time. You will want to make sure you authenticate with an account your whole team can use.
{% endhint %}
