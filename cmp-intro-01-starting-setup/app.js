const app = Vue.createApp({
    data() {
        return {
            friends: [{
                detailAreVisible: false,
                name: 'Soe Myat Min',
                phone: '0986545665456',
                email: 'smm@localhost.com'
            }, {
                detailAreVisible: false,
                name: 'Myat Min Soe',
                phone: '0834565433422',
                email: 'mms@localhost.com'
            },]
        }
    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click = "toggleDetails()">Show Details</button>
            <ul v-if="detailAreVisible">
                <li><strong>Phone:</strong>{{ friend.phone }}</li>
                <li><strong>Email:</strong>{{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailAreVisible: false,
            friend: {
                name: 'Soe Myat Min',
                phone: '0986545665456',
                email: 'smm@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.mount('#app');