import React from 'react';
import {storyOf} from '../../../storybook' 
import TaskCard from '.';

storyOf('Molecule/TaskCard').add('Default',()=><TaskCard title="Office work" description="Get todo app done with react, react-redux and redux-saga"/>)