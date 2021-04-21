import{Membership} from '../Memberships/membership'

export const List = (props) =>{
return props.products.map((item) => (
<Membership
title={item.title}
price={item.price}
description={item.description}
/>
))
}