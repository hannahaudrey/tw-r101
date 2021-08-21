import React from 'react';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

const Apply = () => {
    return (
        <React.Fragment>
		<div style={{border: "2px solid gray",padding: "100px"}}>
            <h1>TomasinoWeb R101 Application PY 2021-2022</h1> 
			<NewlineText text={'PLEASE READ ALL THE INSTRUCTIONS CAREFULLY \n'+

'BEFORE CONTINUING PLEASE: \n'+

'DOWNLOAD THIS PDF PRIMER: https://drive.google.com/open?id=0Bz-smGzuCHiBX0NrZmdfRjNDQWc \n'+

'By continuing, you agree to the following terms and conditions:\n'+

'1. Bona fide students of the University of Santo Tomas who intend to become members of TomasinoWeb (hereinafter referred to as "applicants") shall undergo the TomasinoWeb application process (hereinafter referred to as "application");\n'+

'2. Applicants must satisfactorily accomplish the application to become members of TomasinoWeb. Failure to accomplish the application will result in rejection;\n'+

'3. The collection of the membership fee will be waived until further notice. All members of TomasinoWeb are required to pay a non-refundable, non-transferrable membership fee once the Office for Student Affairs (OSA) allows organizations to do so.\n'+

'4. Applicants who are \n'+
'(a) Officers and staff and/or directly affiliated through any means with the Central Student Council, local Commissions on Election, the Central Commission on Election; \n'+
'(b) Members, staff, and officers and/or directly affiliated through any means with student political parties in local colleges and faculties, University-wide student political parties, and local and national political parties, and;'+
'(c) Members, staffers, or officers of any University-wide media organizations shall be forfeited, with the exception that they shall resign from their posts. With the given rule, disqualified applicants can refund their application fee (send us a message on Facebook or email us at contact@tomasinoweb.org).;\n'+

'5. Make sure you join our applicants Discord server in order to receive future application announcements easily \n'+

'6. You absolve TomasinoWeb from any loss and/or injury, including death, which may occur during the application, and;\n'+

'7. All requirements and OUTPUTS (excluding portfolios) of applicants becomes the property of TomasinoWeb once submitted.\n'+

			'Good luck, applicant! This is your chance to show us what you are made of so make it a good one! May the force be with you!'}/>
      </div>  </React.Fragment>
    );
};

export default Apply;