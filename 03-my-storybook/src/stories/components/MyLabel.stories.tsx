import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// exportacion del componente
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        size: { control: "select" },
        color: { control: "select"},
        fontColor: { control: "color"}
    }
} as ComponentMeta<typeof MyLabel>;

//utilizacion del componente
const Template: ComponentStory<typeof MyLabel> = (args) => (
    <MyLabel {...args} />
);

//se crean las historiasa
export const Basic = Template.bind({});
Basic.args = {
    size: "normal",
    allCaps: false // true: capitalizar toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    allCaps: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color: "secondary" // primary || secondary || tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    color: "tertiary"
};

// TODO: Custom font color
//font color: #5517ac
//size: h1
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: "h1",
    fontColor: "#5517ac"
};
