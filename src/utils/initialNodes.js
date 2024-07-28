

const initialNodes = [
  { id: '1', type: 'customNode',  position: { x: -200, y: 0 }, data: { label: 'Start', isActive: false  } },
  { id: '2', type: 'customNode', position: { x: 250, y: 100 }, data: { label: 'Input: Name, DOB, Gender, Pincode', isActive: false  } },
  { id: '3', type: 'customNode', position: { x: 300, y: 150 }, data: { label: 'Check DOB > 30 years?',isActive: false  } },
  { id: '4', type: 'customNode', position: { x: 100, y: 250 }, data: { label: 'Yes', isActive: false  } },
  { id: '5', type: 'customNode', position: { x: 650, y: 250 }, data: { label: 'No',isActive: false  } },
  { id: '6', type: 'customNode', position: { x: 0, y: 325 }, data: { label: 'Update DB: dob_less_than_30 = "N"',isActive: false  } },
  { id: '7', type: 'customNode', position: { x: 100, y: 400 }, data: { label: 'Check Gender = "F"?',isActive: false  } },
  { id: '8', type: 'customNode', position: { x: 0, y: 500 }, data: { label: 'Gender = "M"',isActive: false  } },
  { id: '9', type: 'customNode', position: { x: 200, y: 500 }, data: { label: 'Gender = "F"',isActive: false  } },
  { id: '10', type: 'customNode', position: { x: -170, y: 615 }, data: { label: 'Check Pincode starts with "40"?',isActive: false  } },
  { id: '11', type: 'customNode', position: { x: -200, y: 700 }, data: { label: 'Yes',isActive: false  } },
  { id: '12', type: 'customNode', position: { x: 100, y: 700 }, data: { label: 'No',isActive: false  } },
  { id: '13', type: 'customNode', position: { x: -300, y: 775 }, data: { label: 'Update DB: status = "loan_approval_required"',isActive: false  } },
  { id: '14', type: 'customNode', position: { x: 100, y: 775 }, data: { label: 'Update DB: status = "loan_approved"' ,isActive: false } },
  { id: '15', type: 'customNode', position: { x: 400, y: 325 }, data: { label: 'Update DB: status = "loan_approved" and dob_less_than_30 = "Y"',isActive: false  } },
  { id: '16', type: 'customNode', position: { x: 700, y: 900 }, data: { label: 'End',isActive: false  } },
  { id: '17', type: 'customNode', position: { x: 200, y: 575 }, data: { label: 'Update DB: status = "loan_approved"',isActive: false  } }
];
  export default initialNodes;
  