# Salesforce



This guide will take you through the steps required to integrate LogicLoop with Salesforce, along with an example use case of updating campaigns using user activity data.

### Prerequisites

Before you begin the integration process, ensure you have the following:

* A valid Salesforce account with administrative privileges.
* Access to LogicLoop with administrative or integration permissions.
* Familiarity with Salesforce's OAuth authentication process.

### Integration Steps

Follow these steps to integrate LogicLoop with Salesforce and utilize user activity data to update campaigns:

#### 1. Create a Connected App in Salesforce

1. Log in to your Salesforce account.
2. In the Quick Find box, type `App Manager` and select it.
3. Click the `New Connected App` button.
4. Fill in the required information for your connected app:
   * **Connected App Name:** LogicLoop Integration (or any name you prefer)
   * **API Name:** LogicLoop\_Integration (auto-populated based on the Connected App Name)
   * **Contact Email:** Your email address
   * **Enable OAuth Settings:** Check this box
   * **Callback URL:** The URL LogicLoop will redirect to after authorization (to be configured later)
   * **Selected OAuth Scopes:** Choose the necessary scopes (e.g., Access and manage your data, Perform requests on your behalf at any time)
5. Click `Save`.

#### 2. Configure the Connected App

1. If you have created your org in Summer '23 or later, follow [this](https://help.salesforce.com/s/articleView?id=release-notes.rn\_security\_username-password\_flow\_blocked\_by\_default.htm\&release=244\&type=5) to `Allow OAuth Username-Password Flows`
2. After creating the connected app, locate it in the Connected App list and click on its name.
3. Note the `Consumer Key` and `Consumer Secret` values, as you'll need them to generate your authorization token.

#### 3. Generate an Access Token

LogicLoop uses the [Username-Password OAuth Authentication Flow](https://developer.salesforce.com/docs/atlas.en-us.220.0.api\_rest.meta/api\_rest/intro\_understanding\_username\_password\_oauth\_flow.htm) to obtain an access token for your Salesforce account.

In an API platform platform, request an access token.

#### 4. Configure LogicLoop Action Destination

1. With the access token acquired in the previous step, configure LogicLoop's action destination:
   * **Instance URL:** Your Salesforce instance URL (e.g., https://your-instance.salesforce.com)
   * **Access Token:** The access token obtained from the previous step.

#### 5. Parameterize and Templates

Utilize LogicLoop's parameterization and templates features to dynamically send data to the appropriate locations in Salesforce. Refer to LogicLoop's documentation on [parameters and templates](../templating.md) for more information.

### Example Use Case: Updating Campaigns

Let's consider an example where you want to update Salesforce campaigns based on user activity data:

1. Write a LogicLoop rule to monitor user activity data.
2. When specific conditions are met, LogicLoop will automatically be triggered to update campaign data.
3. LogicLoop sends a request to your Salesforce API with the necessary parameters, updating the campaigns accordingly.

