# Microsoft Teams

## Microsoft Teams Destination in LogicLoop

This guide will help you configure a Microsoft Teams destination in LogicLoop using a webhook URL. This allows you to send notifications and updates directly to a Microsoft Teams channel.

### Prerequisites

* Access to a Microsoft Teams workspace.
* Ability to create an incoming webhook in a Microsoft Teams channel.

### Step 1: Create an Incoming Webhook in Microsoft Teams

Before setting up the destination in LogicLoop, you need to create an incoming webhook in Microsoft Teams. Follow the instructions in the [Microsoft documentation](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet) to create a webhook and obtain the webhook URL.

1. Go to the Microsoft Teams channel where you want to post messages.
2. Select "More options" (the three dots) next to the channel name and then "Connectors".
3. Search for "Incoming Webhook" and click "Configure".
4. Enter a name for the webhook and optionally upload an image to make it easier to identify.
5. Click "Create" and copy the webhook URL provided. Save this URL as it will be used in LogicLoop.

### Step 2: Configure the Microsoft Teams Destination in LogicLoop

1. **Navigate to Destinations:**
   * Log in to your LogicLoop account.
   * Go to the "Destinations" section from the sidebar.
2. **Add New Destination:**
   * Click the "Add Destination" button.
3. **Select Microsoft Teams:**
   * In the list of available destinations, select "Microsoft Teams Webhook".
4. **Enter Webhook URL:**
   * In the configuration screen, you will be prompted to enter the webhook URL.
   * Paste the webhook URL you copied from Microsoft Teams into the provided field.
5. **Save Configuration:**
   * Click "Save" to complete the setup.

Your Microsoft Teams destination is now configured in LogicLoop. You can use this destination in your LogicLoop actions to send messages directly to your specified Microsoft Teams channel.

### Example Usage

When setting up an action in LogicLoop that sends notifications or updates, select the Microsoft Teams destination you just configured. You can customize the message content as needed, and it will be delivered to your Microsoft Teams channel via the webhook.

### Troubleshooting

* **Invalid Webhook URL:** Ensure that the webhook URL is correctly copied from the Microsoft Teams configuration. Any errors in the URL will prevent messages from being delivered.
* **Permissions:** Verify that the webhook has the necessary permissions to post messages in the desired Microsoft Teams channel.

For further assistance, refer to the [Microsoft Teams webhook documentation](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet) or contact LogicLoop support.
