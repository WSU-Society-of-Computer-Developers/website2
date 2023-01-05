import React from "react";

export default function PaypalEmbed() {
    return <form action="https://www.paypal.com/donate" method="post" target="_top">

        <input type="image" className="paypal-donate" src="paypal-donate-button.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="PayPal Payment" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
}