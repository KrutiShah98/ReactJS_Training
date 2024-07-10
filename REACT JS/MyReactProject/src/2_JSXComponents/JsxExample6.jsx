// eslint-disable-next-line no-unused-vars
import React from 'react'
import AdminCom from './ExtraCom/AdminCom';
import SupplierCom from './ExtraCom/SupplierCom';
import CustomerCom from './ExtraCom/CustomerCom';

export default function JsxExample6() 
{
    const userRole = "Customer";

    switch(userRole)
    {
        case "Admin":
            return <AdminCom/>;
        case "Supplier":
            return <SupplierCom/>;
        case "Customer":
            return <CustomerCom/>;
    }
}
