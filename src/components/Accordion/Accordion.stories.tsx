import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action("accordion mode change event fired")


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
export const UsersUncollapsedode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>;

export const ModeChanging = () =>{
    const [value,setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={ () => setValue(!value)}/>;
}
