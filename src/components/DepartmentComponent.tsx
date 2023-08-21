import React, { useState } from 'react';
import { Typography, List, ListItem, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DepartmentComponent = () => {
  const departmentData = [
    {
      department: 'customer_service',
      subDepartments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      subDepartments: ['graphic_design', 'product_design', 'web_design'],
    },
    {
      department: 'engineering',
      subDepartments: ['software_engineering', 'hardware_engineering', 'systems_engineering'],
    },
    {
      department: 'marketing',
      subDepartments: ['digital_marketing', 'brand_management', 'market_research'],
    },
  ];

  const [expanded, setExpanded] = useState('');
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleExpand = (departmentId) => {
    setExpanded(expanded === departmentId ? '' : departmentId);
  };

  const updateSelectedItems = (departmentId, subDepartmentIndex, shouldCheck) => {
    const department = departmentData.find((dept) => dept.department === departmentId);
    const subDepartment = department.subDepartments[subDepartmentIndex];
    const itemKey = `${departmentId}_${subDepartment}`;

    const newSelectedItems = new Set(selectedItems);

    if (shouldCheck) {
      newSelectedItems.add(itemKey);
    } else {
      newSelectedItems.delete(itemKey);
    }

    setSelectedItems(newSelectedItems);
  };

  const handleSelectDepartment = (departmentId, shouldCheck) => {
    const department = departmentData.find((dept) => dept.department === departmentId);
  
    if (shouldCheck) {
      department.subDepartments.forEach((subDepartment) => {
        const subItemKey = `${departmentId}_${subDepartment}`;
        setSelectedItems(selectedItems.add(subItemKey));
      });
    } else {
      department.subDepartments.forEach((subDepartment) => {
        const subItemKey = `${departmentId}_${subDepartment}`;
        selectedItems.delete(subItemKey);
      });
    }
  
    // Update department checkbox
    const departmentItemKey = `${departmentId}_department`;
    setSelectedItems((prevSelectedItems) =>
      shouldCheck
        ? new Set([...prevSelectedItems, departmentItemKey])
        : new Set([...prevSelectedItems].filter(item => item !== departmentItemKey))
    );
  };
  

  return (
    <div style={{ width: '80%', marginInline: 'auto', marginBlock: '50px' }}>
      {departmentData.map((department, departmentIndex) => (
        <div key={departmentIndex}>
          <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }}>
            <Checkbox
              checked={department.subDepartments.every(subDept => selectedItems.has(`${department.department}_${subDept}`))}
              onChange={(e) => handleSelectDepartment(department.department, e.target.checked)}
            />
            <Typography variant="h6" onClick={() => handleExpand(department.department)}>
              {department.department} ({department.subDepartments.length})
            </Typography>
            <ExpandMoreIcon
              style={{ marginLeft: '0', cursor: 'pointer' }}
              onClick={() => handleExpand(department.department)}
            />
          </div>
          <Accordion expanded={expanded === department.department} >
            <AccordionSummary expandIcon style={{display:'none'}}/>
            <AccordionDetails >
              <List>
                {department.subDepartments.map((subDepartment, subDepartmentIndex) => (
                  <ListItem key={subDepartmentIndex}>
                    <Checkbox
                      checked={selectedItems.has(`${department.department}_${subDepartment}`)}
                      onChange={() => updateSelectedItems(department.department, subDepartmentIndex, !selectedItems.has(`${department.department}_${subDepartment}`))}
                    />
                    {subDepartment}
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default DepartmentComponent;
