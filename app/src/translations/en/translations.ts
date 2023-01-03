export default {
  translation: {
    sidebar: {
      payments: 'Payments',
      ledgers: 'Ledgers',
      configuration: 'Configuration',
    },
    topbar: {
      logout: 'Logout',
      search: {
        title: 'Search anything',
        suggestions: {
          sections: {
            transactions: 'Transactions',
            accounts: 'Accounts',
            payments: 'Payments',
          },
          more: 'More',
        },
      },
      notifications: {
        tooltip: 'No new notifications',
      },
    },
    navbar: {
      title: {
        overview: 'Overview',
        accounts: 'Accounts',
        transactions: 'Transactions',
        ledgers: 'Ledgers',
        payments: 'Payments',
        connectors: 'Connectors',
        apps: 'Apps',
        oAuthClients: 'OAuth Clients',
        webhooks: 'Webhooks',
      },
    },
    pages: {
      ledgers: {
        title: 'Ledgers',
        table: {
          columnLabel: {
            name: 'Name',
          },
        },
      },
      ledger: {
        sections: {
          logs: {
            title: 'Logs',
            showMore: 'Show more',
          },
          stats: {
            title: 'Metrics',
          },
          info: {
            version: 'Version',
            storage: 'Storage driver',
            server: 'Server',
          },
          migrations: {
            title: 'Data migrations',
            table: {
              columnLabel: {
                name: 'Name',
                date: 'Date',
                version: 'Version',
                state: 'State',
              },
            },
          },
        },
        logs: {
          title: 'Full logs',
          table: {
            columnLabel: {
              type: 'Type',
              date: 'Date',
              hash: 'Hash',
              data: 'Data',
            },
          },
        },
      },
      overview: {
        title: 'Overview',
        status: 'Status',
        tasks: {
          title: 'Tasks',
          tuto: {
            title: 'Hello World',
            description: 'Start quickly by following our  tutorial',
            buttonText: 'Go to the docs',
          },
          useCaseLib: {
            title: 'Use cases',
            description: 'Checkout what use case you want to implement',
            buttonText: 'Go to the library',
          },
        },
        subtitle: 'We hope all is well and you have a great day',
        hello: 'Hello !',
        setUp: {
          sectionTitle: 'Set-up',
          connexion: {
            title: 'Add connection',
            description:
              'Add connectors for your favorites PSP and get analyse payments.',
            buttonText: 'Go to connectors',
          },
          ledger: {
            title: 'Submit ledger transactions ',
            description:
              'Create transactions and accounts, and checkout financial flows',
            buttonText: 'Add ledger transaction',
          },
        },
        stats: {
          transactions: 'Transactions',
          accounts: 'Accounts',
        },
        emptyState: {
          title: 'There is nothing here, yet',
          description: 'Connect your tools, set up tasks and start right away.',
          button: 'Get started',
        },
      },
      payment: {
        title: 'Payment',
        stripeBtnTitle: 'View on Stripe dashboard',
        id: 'ID',
        copyToClipboardTooltip:
          '{{value}} has successfully been copied to clipboard !',
        reference: 'Reference',
        scheme: 'Scheme',
        type: 'Type',
        processor: 'Processor',
        status: 'Status',
        netValue: 'Net Value',
        initialAmount: 'Initial Amount',
        capturedAmount: 'Captured Amount',
        refoundedAmount: 'Refounded Amount',
        eventJournal: {
          title: 'Events journal',
          netValueChange: 'Net value changed from {{value1}} to {{value2}}',
          statusChange: 'Status changed from {{value1}} to {{value2}}',
        },
        reconciliation: {
          title: 'Reconciliation',
          subTitle: 'Attached ledger transactions found',
        },
        metadata: 'Metadata',
        rawObject: 'Raw Object',
      },
      payments: {
        title: 'Payments',
        filters: {
          type: 'Type',
          status: 'Status',
          provider: 'Provider',
          reference: 'Reference',
          value: 'Value',
          source: 'Source',
          destination: 'Destination',
        },
        table: {
          columnLabel: {
            provider: 'Provider',
            status: 'Status',
            type: 'Type',
            value: 'Value',
            reference: 'Reference',
            scheme: 'Scheme',
            date: 'Date',
          },
        },
        payin: {
          tab: 'Pay-in',
        },
        payout: {
          tab: 'Payout',
        },
      },
      account: {
        title: 'Account',
        table: {
          columnLabel: {
            balance: {
              asset: 'Asset',
              value: 'Balance',
            },
            volume: {
              asset: 'Asset',
              sent: 'Sent',
              received: 'Received',
            },
            metadata: {
              key: 'Key',
              value: 'Value',
            },
          },
        },
        balances: {
          title: 'Balances',
        },
        volumes: {
          title: 'Volumes',
        },
        transactions: {
          title: 'Transactions',
        },
        metadata: {
          title: 'Metadata',
        },
      },
      accounts: {
        tab: 'Accounts',
        title: 'Accounts',
        table: {
          columnLabel: {
            address: 'Address',
            ledger: 'Ledger',
          },
        },
        filters: {},
      },
      transactions: {
        title: 'Transactions',
        tab: 'Transactions',
        filters: {},
        table: {
          columnLabel: {
            txid: 'Txid',
            status: 'Status',
            value: 'Value',
            source: 'Source',
            destination: 'Destination',
            ledger: 'Ledger',
            date: 'Date',
            actions: 'Actions',
          },
        },
      },
      transaction: {
        title: 'Transaction',
        table: {
          columnLabel: {
            metadata: {
              key: 'Key',
              value: 'Value',
            },
            txid: 'Txid',
            status: 'Status',
            amount: 'Amount',
            source: 'Source',
            destination: 'Destination',
            date: 'Date',
          },
        },
        postings: {
          title: 'Postings',
        },
        graph: {
          title: 'Graph',
        },
        reco: {
          title: 'Reconciliation',
        },
        metadata: {
          title: 'Metadata',
        },
      },
      connectors: {
        title: 'Connectors',
        table: {
          columnLabel: {
            name: 'Name',
            type: 'Type',
            status: 'Status',
          },
        },
        tabs: {
          apps: {
            title: 'Apps',
            pageButton: {
              actionLabel: 'Add an App',
            },
          },
          webhooks: {
            title: 'Webhooks',
            pageButton: {
              actionLabel: 'Add a Webhook',
            },
          },
          oAuthClients: {
            title: 'OAuth Clients',
            pageButton: {
              actionLabel: 'Add an Oauth Client',
            },
          },
        },
      },
      apps: {
        title: 'App',
        form: {
          connectorsSelect: {
            errors: {
              duplicated: 'Connector {{connector}} is already installed',
            },
          },
          errors: {
            inputTypeDoesntExist:
              'Form builder has no factory method for field type {{fieldType}}',
            error:
              "Something wrong happened while installing connector. Checkout {{connectorName}}'s page for more details.",
          },
        },
      },
      app: {
        sections: {
          dangerZone: {
            title: 'Manage',
            delete: {
              title: 'Delete connector instance',
              button: 'Delete',
              confirm:
                'Deleting the <bold>{{item}}</bold> connector will purge all of its synced data. This action is not reversible and deleted data will be lost forever',
              description:
                'This will remove this connector instance and all its associated payments data.',
            },
            reset: {
              title: 'Reset connector instance',
              button: 'Reset',
              confirm:
                'Resetting the <bold>{{item}}</bold> connector will purge all of its synced data and restart the syncing from scratch. This action is not reversible and deleted data will be lost forever.',
              description:
                'This will delete all the historical payments data for this connector and restart synchronization from scratch.',
            },
          },
          tasks: {
            title: 'Tasks',
            table: {
              rows: {
                noLogs: 'No logs',
                showErrorLogs: 'Display logs',
                logsModalTitle: 'Logs',
              },
              columnLabel: {
                status: 'Status',
                error: 'Error',
                createdAt: 'Creation date',
                descriptor: 'Description',
              },
            },
          },
        },
      },
      oAuthClient: {
        title: 'OAuth Client',
        sections: {
          details: {
            title: 'Details',
            name: 'Name',
            description: 'Description',
            public: 'Public',
            trusted: 'Trusted',
            redirectUris: 'Redirect uris',
            postLogoutRedirectUris: 'Post logout redirect uris',
            uris: {
              placeholder: 'Not configured',
            },
          },
          dangerZone: {
            title: 'Manage',
            delete: {
              title: 'Delete OAuth Client',
              description:
                "This action will definitely delete your OAuth Client. You won't be able to use your secret for machine to machine treatments.",
            },
          },
          secrets: {
            title: 'Secrets',
            create: 'Create new secret',
            deleteFeedback: 'Secret',
            clear:
              'For security purpose, full clear secret display is only ephemeral. Keep it safe somewhere',
          },
        },
        forms: {
          createSecret: {
            name: {
              label: 'Name',
            },
          },
          deleteSecret: {
            name: {
              label: 'Name',
            },
          },
        },
      },
      oAuthClients: {
        table: {
          columnLabel: {
            name: 'Name',
            public: 'Type',
            id: 'ID',
            description: 'Description',
          },
          rows: {
            public: 'public',
            private: 'private',
          },
        },
        form: {
          create: {
            name: {
              label: 'Name',
              errors: {
                required: 'Oauth client name is required',
              },
            },
            description: {
              placeholder: 'Write a quick description',
            },
            redirectUri: {
              label: 'Redirect URI',
            },
            postLogoutRedirectUri: {
              label: 'Redirect post logout URI',
            },
          },
        },
      },
      webhook: {
        title: 'Webhook',
        secret: 'Webhook secret',
        sections: {
          details: {
            title: 'Details',
            endpoint: 'Endpoint',
            events: 'Events',
            createdAt: 'Created at',
            updatedAt: 'Updated at',
          },
          dangerZone: {
            title: 'Manage',
            delete: {
              title: 'Delete webhook',
              description:
                'This action will definitely delete your webhook config and will no longer work.',
            },
          },
          secrets: {
            title: 'Secrets',
            reveal: 'Reveal',
            renew: 'Renew',
          },
        },
      },
      webhooks: {
        table: {
          columnLabel: {
            endpoint: 'Endpoint',
            eventTypes: 'Events',
            active: 'Status',
            createdAt: 'Creation date',
          },
          rows: {
            active: 'Active',
            inactive: 'Inactive',
          },
        },
        form: {
          create: {
            endpoint: {
              label: 'Endpoint',
              errors: {
                valid:
                  'The endpoint URL should be a valid https URL and be unique.',
              },
            },
            eventTypes: {
              label: 'Events',
              errors: {
                valid: 'You must choose at least one event',
              },
            },
          },
        },
      },
    },
    common: {
      status: {
        active: 'Active',
        paused: 'Paused',
        inactive: 'Inactive',
      },
      formErrorsMessage: {
        requiredInputs: '{{inputName}} is required',
      },
      showMore: 'Show more',
      filters: {
        ledgers: 'Ledgers',
      },
      buttons: {
        delete: 'Delete',
      },
      feedback: {
        success: 'Action done with success',
        error: 'Something wrong happened',
        delete: '{{item}} could not be deleted',
        create: '{{item}} could not be created',
        update: '{{item}} could not be updated',
      },
      units: {
        seconds: 'seconds',
      },
      boundaries: {
        errorState: {
          error: {
            title: 'Well, this is unexpected. Sorry',
            description:
              'You can try again by refreshing your browser. If the error is still persisting, please feel free to ask for help to our support team.',
            button: 'Refresh !',
          },
          serviceDown: {
            title: 'Hm, we are experiencing technical difficulties.',
            description: 'You can checkout our status page to find out more.',
            button: 'Go to status page',
          },
          notFound: {
            title: '',
            description: 'Hm, no results found',
            button: 'Go back home',
          },
          unauthorized: {
            title: 'Looks like you do not have required permission!',
            description: 'Checkout with your admin !',
            button: 'Go back home',
          },
          forbidden: {
            title: 'Looks like you can not be here',
            description: 'Sorry bro',
            button: 'Go back home',
          },
        },
        title: 'Uh oh!',
      },
      soon: 'Soon!',
      title: 'Formance',
      noResults: 'No results',
      table: {
        actionColumnLabel: 'Actions',
        metadata: {
          columnLabel: {
            value: 'Value',
          },
        },
        pagination: {
          showing: 'Showing',
          results: 'results',
          separator: 'of',
          previous: 'Prev',
          after: 'Next',
        },
      },
      tooltip: {
        copied: 'Copied! ✔️',
      },
      breadcrumbs: {
        categories: {
          payments: 'Payments',
          ledgers: 'Ledgers',
          configuration: 'Configuration',
        },
        targets: {
          payments: 'Pay-in & Payout',
          logs: 'Logs',
          ledgers: 'All',
          accounts: 'Accounts',
          transactions: 'Transactions',
          oAuthClients: 'OAuth Clients',
          webhooks: 'Webhooks',
          apps: 'Apps',
          connectors: 'Connectors',
        },
      },
      search: {
        viewAll: 'View all {{target}}',
        title: 'Results for "{{value}}" accross {{target}}',
        placeholder: 'Search anything',
        targets: {
          ledger: 'Ledger',
          account: 'Account',
          transaction: 'Transaction',
          payment: 'Payment',
        },
      },
      dialog: {
        metadata: {
          update: 'Update metadata',
        },
        createTitle: 'Creation',
        updateTitle: 'Update',
        resetTitle: 'Reset',
        confirmation: '{{action}} confirmation',
        deleteTitle: 'Delete confirmation',
        cancelButton: 'Cancel',
        saveButton: 'Save',
        confirmButton: 'Confirm',
        messages: {
          warning: 'Are you absolutely sure?',
        },
      },
      forms: {
        selectEntity: 'Select a {{entityName}}',
        metadata: {
          json: {
            label: 'JSON',
            errors: {
              valid: 'JSON syntax error',
            },
          },
        },
      },
    },
  },
};
