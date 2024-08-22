# Google Sheets

## Google Sheets&#x20;

LogicLoop supports Google Sheets OAuth integration.

### Connect to your Workspace&#x20;

In the left navigation bar, click **Data Sources** and then select **Integrations**. Here you will be able to connect to Google by choosing **Connect with Service**.

<figure><img src="https://lh5.googleusercontent.com/nOOe-9_9SEcJHB1Y3UmQsSw11dsrgN48aXK5_L3KlEm-viA0ARW5zjE92IVgdgQSG49NNjkjFt8SuY2CDNLug2ieFgNqMkqFcelrT9OgNWXQPhINWNiD1w0eGKSMD5AvRKgGyJiUBMJ7UpE84v5MYYgia1tvXhoEPBjQtBb-_-Wgu9SxV7y2pPUeKVyZsA" alt=""><figcaption></figcaption></figure>

Select Google Sheets as your service and choose **Grant Access**. This will open the Google Sheets OAuth request.

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.53.22 PM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.53.49 PM.png" alt=""><figcaption></figcaption></figure>

Once you allow LogicLoop access and create your integration, you will see it listed as an active integration.

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.54.22 PM.png" alt=""><figcaption></figcaption></figure>

### Add Google Sheets as a Data Source

Now that you have Google Sheets integrated into LogicLoop, add it as a data source. In the left navigation panel, choose **Data Sources**. Create a data source of type _Google Sheets (Integration)_ and choose your integration.



<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.54.55 PM.png" alt=""><figcaption></figcaption></figure>

You can now read in Google Sheets for writing [rules](../../data-sources/supported-data-sources/google-sheets.md).

### Add Google Sheets as an Action Destination&#x20;

You can also add Google Sheets as an action destination. In the left navigation panel, choose **Destinations**. Create an action destination of type Google Sheets (Integration) and choose your integration.

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.55.38 PM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.55.53 PM.png" alt=""><figcaption></figcaption></figure>

### Write to a Google Sheet in an Action&#x20;

Add an action to a rule by clicking the **+ Add Action** button in the bottom left corner of the [Rule](../../queries/rules/) source view. Your Slack workspace will now be an available destination.

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.57.34 PM.png" alt=""><figcaption></figcaption></figure>

When configuring your action subscription, you will be able to choose the sheet to which you want to write your data.

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 1.57.43 PM.png" alt=""><figcaption></figcaption></figure>

You have now configured Google Sheets as an [action destination](../../actions/destinations/google-sheets.md).

{% hint style="warning" %}
Only one OAuth integration per type (ex. Slack, Google Sheets) is supported at a time. You will want to make sure you authenticate with an account your whole team can use.
{% endhint %}
