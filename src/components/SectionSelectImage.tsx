import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


export const SectionSelectImage = (section: string) => {
{
        return (
            <div className="sectionselect">
<RouterLink to={`./sections/${section}`}><img className="sectionselect-img" src={require(`../images/${section}.jpg`)}></img></RouterLink>
            </div>
        );
    }
}
