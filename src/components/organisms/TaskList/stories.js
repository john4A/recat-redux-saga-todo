import React from 'react';
import { storyOf } from '../../../storybook';
import TaskList from '.';

const tasks=[
    {
        title:'Task 1',
        description:'Description 1'
    },
    {
        title:'Task 2',
        description:'Description 2'
    },
    {
        title:'Task 3',
        description:'Description 3'
    },
    {
        title:'Task 4',
        description:'Description 4'
    },
]

storyOf('Molecule/TaskList').add('Default',()=><TaskList taskList={tasks}/>)