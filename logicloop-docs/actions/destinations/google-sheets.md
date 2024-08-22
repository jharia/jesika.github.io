# Google Sheets

You can have your rule write data to Google Sheets as an action.&#x20;

### Integrate Directly with Google Sheets

Follow our [integration guide](../../teams/integrations/google-sheets.md) to get your LogicLoop workspace connected with Google Sheets.

### Set up your Action Subscription

Next, attach an Action Subscription to your rule that will write to your Google spreadsheet. All you have to do is paste in the URL of your Google sheet and specify which tab number you wish to write to (to specify the first tab enter the number 0, second tab 1, third tab 2 and so on). When your rule runs, it will write all the rows returned from your SQL query into the spreadsheet.&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-12-29 at 4.48.00 PM.png>)

### Legacy Option: Creating your Destination

First, you'll want to go to Action Destinations and create a Google Spreadsheets Destination.&#x20;

{% hint style="info" %}
Please email **support@logicloop.com** to access the JSON key file needed to configure the destination
{% endhint %}

![](<../../.gitbook/assets/Screen Shot 2021-12-29 at 4.44.02 PM (1).png>)

Share your Google Sheet with `logicloop@logicloop-322519.iam.gserviceaccount.com` &#x20;

![](<../../.gitbook/assets/image (46).png>)
