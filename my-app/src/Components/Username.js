import React from 'react';
import { useParams } from 'react-router-dom';
function Username() {
const { name } = useParams();
return <h1>Username: {name}</h1>;
}
export default Username;