import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Define the TypeScript type for the JSON data
interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data: DepartmentData[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ data }) => {
  const [openDepartments, setOpenDepartments] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpenDepartments((prevState) => ({
      ...prevState,
      [department]: !prevState[department],
    }));
  };

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <List>
      {data.map(({ department, sub_departments }) => (
        <React.Fragment key={department}>
          <ListItem button onClick={() => handleToggle(department)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedItems[department] || false}
                onChange={() => handleCheckboxChange(department)}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={department} />
            {openDepartments[department] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDepartments[department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sub_departments.map((subDepartment) => (
                <ListItem key={subDepartment} button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedItems[subDepartment] || false}
                      onChange={() => handleCheckboxChange(subDepartment)}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

// Hardcoded JSON data
const jsonData: DepartmentData[] = [
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "ark",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "black",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "green",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
];

function App() {
  return (
    <div>
      <h1>Department List with Collapsible Sub-Departments and Checkboxes</h1>
      <DepartmentList data={jsonData} />
    </div>
  );
}

export default App;
