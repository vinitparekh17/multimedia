const rpbutton1 = document.getElementById('rzp-button1')
const rpbutton2 = document.getElementById('rzp-button2')
const rpbutton3 = document.getElementById('rzp-button3')

rpbutton1.addEventListener('click', async (event) => {
    await fetch('/order', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ amount: 49 })
    })
        .then(res => res.json())
        .then(data => {
            // let {order} = response
            var options = {
                key: "rzp_test_q4QHnH4gT1BKpW", // Enter the Key ID generated from the Dashboard
                amount: 49 * 1000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Basic Subscription",
                description: "Multimedia subscription",
                image: "https://wpcontents.net/wp-content/uploads/2020/07/Premium-Membership-1.png",
                order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: () => {
                    alert("Payment successfull!");
                },
                prefill: {
                    name: "Vinit Parekh",
                    email: "mrparekh@example.com",
                    contact: "9009999900",
                },
                notes: { address: "Razorpay Corporate Office" },
                theme: { color: "rgb(255, 39, 39)" },
            };
            var rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", (response) => {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            document.getElementById("rzp-button1").onclick = function (e) {
                rzp1.open();
                e.preventDefault();
            };
        })
})
rpbutton2.addEventListener('click', async (event) => {
    await fetch('/order', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ amount: 149 })
    })
        .then(res => res.json())
        .then(data => {
            // let {order} = response
            var options = {
                key: "rzp_test_q4QHnH4gT1BKpW", // Enter the Key ID generated from the Dashboard
                amount: 149 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Standard Subscription",
                description: "Multimedia subscription",
                image: "https://wpcontents.net/wp-content/uploads/2020/07/Premium-Membership-1.png",
                order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: () => {
                    alert("Payment successfull!");
                },
                prefill: {
                    name: "Vinit Parekh",
                    email: "mrparekh@example.com",
                    contact: "9009999900",
                },
                notes: { address: "Razorpay Corporate Office" },
                theme: { color: "rgb(255, 39, 39)" },
            };
            var rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", (response) => {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            document.getElementById("rzp-button2").onclick = function (e) {
                rzp1.open();
                e.preventDefault();
            };
        })
})
rpbutton3.addEventListener('click', async (event) => {
    await fetch('/order', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ amount: 399 })
    })
        .then(res => res.json())
        .then(data => {
            // let {order} = response
            var options = {
                key: "rzp_test_q4QHnH4gT1BKpW", // Enter the Key ID generated from the Dashboard
                amount: 399 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Unlimited Subscription",
                description: "Multimedia subscription",
                image: "https://wpcontents.net/wp-content/uploads/2020/07/Premium-Membership-1.png",
                order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: () => {
                    alert("Payment successfull!");
                },
                prefill: {
                    name: "Vinit Parekh",
                    email: "mrparekh@example.com",
                    contact: "9009999900",
                },
                notes: { address: "Razorpay Corporate Office" },
                theme: { color: "rgb(255, 39, 39)" },
            };
            var rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", (response) => {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            document.getElementById("rzp-button3").onclick = function (e) {
                rzp1.open();
                e.preventDefault();
            };
        })
})