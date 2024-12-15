import React from "react"

function Footer(){
    return(
        <div className="bg-black flex text-white justify-evenly items-center h-[300px] mt-20">
            <div>
                <h1 className="text-2xl font-bold">Exclusive</h1>
                <ul>
                    <li>Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <li>Contact US</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Support
                </h1>
                <ul>
                    <li>111 Bijoy sarani, Dhaka, </li>
                    <li> DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>0310-3720608</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Account</h1>
                <ul>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Quick Link</h1>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer