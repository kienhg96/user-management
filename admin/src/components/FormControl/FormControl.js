import React from 'react';
import './FormControl.css';

const FormControl = ({children, align = 'initial'}) => (
	<div
		className="form-control"
		style={{
			textAlign: align
		}}
	>{children}</div>
);

export default FormControl;
