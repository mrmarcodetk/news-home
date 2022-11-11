import React from 'react';
import './Divider.css'
export interface DividerInterface { }

const Divider: React.FC<DividerInterface> = () => {
	return <div className='divider' />;
};

export default Divider;
