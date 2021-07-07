import { useState } from 'react';

export default function useForm(initialValue) {
    const [state, setState] = useState(initialValue);
    
    return [state, (e) => setState({...state, [e.target.name]: e.target.value})];
}