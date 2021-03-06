/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a AccountClient. */
class AccountClient extends ServiceClient {
  /**
   * Create a AccountClient.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://api.appcenter.ms/';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.apiTokens = new operations.ApiTokens(this);
    this.apps = new operations.Apps(this);
    this.azureSubscription = new operations.AzureSubscription(this);
    this.distributionGroups = new operations.DistributionGroups(this);
    this.appInvitations = new operations.AppInvitations(this);
    this.users = new operations.Users(this);
    this.organizations = new operations.Organizations(this);
    this.orgInvitations = new operations.OrgInvitations(this);
    this.teams = new operations.Teams(this);
    this.distributionGroupInvitations = new operations.DistributionGroupInvitations(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = AccountClient;
