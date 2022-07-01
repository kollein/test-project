const defaultState = {
  appTheme: 'default',
  isLoading: false,
  ndContext: {
    site: {
      url: 'https://performancetest.dealerwebsite.co.uk',
      stockScope: {
        defaultValues: {},
        sectionCustomQuery: {
          condition: [
            'Used',
          ],
        },
        type: 'groupHash',
        values: [
          '2375a2776dc187291e2fd928aeb5136e54f10a3a',
        ],
      },
      gfSearchApi: {
        uuid: process.env.VUE_APP_SEARCH_API_UUID,
        clientToken: process.env.VUE_APP_SEARCH_API_AUTH,
        apiUrl: process.env.VUE_APP_SEARCH_API_URL,
      },
      onlineDepositSoftwareHash: 'e2c72ddd5c3c8db08b6ef42208daad9d19e2e60d',
      valuationGroupSoftwareHash: '4aa884911f449ee9a19f258530e936683b3c27be',
      groupHash: '2375a2776dc187291e2fd928aeb5136e54f10a3a',
      franchiseHash: 'e38dd1c2f6e075c7db7727ae6b34285eb914b252',
      groupSoftwareHash: 'e2c72ddd5c3c8db08b6ef42208daad9d19e2e60d',
      locationHash: '9b2b03a9efc40ddec8fc19ea3f3b9ed2d6828acf',
      listingUrl: 'https://localhost:8080/used-vehicles/',
    },
    vehicle: {
      id: '12996073',
    },
    auth: {
      clientId: process.env.VUE_APP_CLIENT_ID,
    },
  },
};

// actions
const actions = {
  async getAuthToken() {
    if (!window.ndAuth) {
      throw new Error('Fail to init ndAuth');
    }
    const token = await window.ndAuth.getToken();
    return token;
  },
  initNDContext: ({ state, commit }) => {
    if (window.nd) {
      window.nd.auto.require(['context/provider'], (provider) => {
        const { site, auth } = provider.get();
        const {
          url, stockScope, gfSearchApi, onlineDepositSoftwareHash,
          valuationGroupSoftwareHash, groupHash, franchiseHash,
          groupSoftwareHash, locationHash, listingUrl, privacyPageUrl,
        } = site;
        const { defaultValues, sectionCustomQuery, type, values } = stockScope;

        commit('setByPropName', {
          ndContext: {
            site: {
              url,
              stockScope: { defaultValues, sectionCustomQuery, type, values },
              gfSearchApi,
              onlineDepositSoftwareHash,
              valuationGroupSoftwareHash,
              groupHash,
              franchiseHash,
              groupSoftwareHash,
              locationHash,
              listingUrl,
              privacyPageUrl,
            },
            auth,
          },
        });
        window.ND_COMPONENT_CONTEXT = state.ndContext;
      });
    } else {
      window.ND_COMPONENT_CONTEXT = state.ndContext;
    }
  },
  getMetaData: ({ state }) => btoa(JSON.stringify({
    group: state.ndContext.site.groupHash,
    franchise: state.ndContext.site.franchiseHash,
    localtion: state.ndContext.site.locationHash,
    groupSoftware: state.ndContext.site.groupSoftwareHash,
  })),
};

// mutations
const mutations = {
  setByPropName(state, data) {
    Object.keys(data).forEach((prop) => {
      state[prop] = data[prop];
    });
  },
};

// getters
const getters = {
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
