import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import man from '../assets/Images/man.jpg'
import woman from '../assets/Images/women.jpg'
import kids from '../assets/Images/kids.jpg'



export const InfoItems = [
    {
        icon: <FaShippingFast className="text-3xl text-red-600" />,
        title: 'Free Shipping',
        description: 'Get your order with no extra cost'
    },
     {
        icon: <FaHeadset className="text-3xl text-red-600" />,
        title: 'Support 24/7',
        description: 'We are here to assist you'
    }, {
        icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
        title: '100% Money Back',
        description: 'Full refund if you are not satistfied'
    }, {
        icon: <FaLock className="text-3xl text-red-600" />,
        title: 'Secure Payment',
        description: 'Your payment information is safe with us'
    }, {
        icon: <FaTag className="text-3xl text-red-600" />,
        title: 'Discount',
        description: 'Enjoy the best price on our products!'
    }
];

export const categories = [
    {
        title: 'Man',
        url: man
    },
        {
        title: 'Woman',
        url: woman
    },    {
        title: 'Kids',
        url: kids
    },
]