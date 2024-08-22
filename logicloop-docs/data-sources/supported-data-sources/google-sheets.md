# Google Sheets

LogicLoop can also read data from Google Sheets.&#x20;

### Integrate Directly with Google Sheets

Follow our [integration guide](../../teams/integrations/google-sheets.md) to get your LogicLoop workspace connected with Google Sheets.

### Reading your Google Sheet

Then, select Google Sheets from the data source dropdown in your new query, and simply add the Spreadsheet ID in the query text, which you will find in the URL [https://docs.google.com/spreadsheets/d/\{{ SPREADSHEET\_ID \}}/](https://docs.google.com/spreadsheets/d/1RIPYoL0p22iyqK34u-A4K-95oQtaP-44jZOlqPmRQxw/). This will get you all the data in the spreadsheet. You can refer to different sheets with `SPREADSHEET_ID` and `PAGE`.

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-04 at 2.09.48 PM.png" alt=""><figcaption></figcaption></figure>

If you'd like to do additional filtering or even write SQL against this data, use the [Query Results datasource.  ](query-results.md)

### Legacy Option: Adding your Data Source

First, you'll want to create a new Google Sheets Data Source.

![](<../../.gitbook/assets/Screen Shot 2022-01-25 at 5.07.07 PM (1).png>)

{% hint style="info" %}
Please email **support@logicloop.com** so we can help you upload the JSON Key File needed to activate the Google Sheets source.&#x20;
{% endhint %}

Share your Google Sheet with `logicloop@logicloop-322519.iam.gserviceaccount.com` &#x20;

![](<../../.gitbook/assets/image (46).png>)

### Setting up your own Google Cloud Project user <a href="#setup" id="setup"></a>

If instead of using our JSON file to connect to Google Sheets you would like to set it up yourself with your own Google Cloud Project, you first need to create a [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts) with Google. Service Accounts allow third-party applications like LogicLoop to read data from your Google apps without needing to log-in each time. During Service Account setup you will be provided with a JSON key file. You need to upload this file to LogicLoop when setting up the data source.

#### How to create a Google Service Account? <a href="#how-to-create-a-google-service-account" id="how-to-create-a-google-service-account"></a>

1. Open the [API Credentials Page](https://console.cloud.google.com/apis/credentials). If prompted, select or create a project.
2. Click the “Create credentials” button. On the dropdown that appears, chose “Service account key”.
3. On the following page, use the dropdown to select the project you elected in step 1. For role select `Project > Viewer` from the tree menu.
4. Under key type, select JSON and hit “Create”

A `.json` file will then download to your computer. In LogicLoop under Data Sources, add a new data source for `GoogleSpreadsheet`. In the modal that appears, name this connection and upload the `.json` file you downloaded from the Google credentials console.

Now, you can follow the instructions above to share your Google Sheet with your own service account id (instead of `logicloop@logicloop-322519.iam.gserviceaccount.com`) and create a rule to read your data in.&#x20;

{% hint style="info" %}
LogicLoop uses [Python-datutil](https://dateutil.readthedocs.io/en/stable/) to parse dates from Google Spreadsheets. If you experience issues where LogicLoop parses the date incorrectly, try adjusting the date formatting in your sheet to ISO8601 or one of the formats shown [here](https://dateutil.readthedocs.io/en/stable/examples.html#parse-examples).
{% endhint %}

