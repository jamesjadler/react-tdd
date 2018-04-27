import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import PersonAdd from "./Components/PersonAdd";

describe('The App', () => {

    it('Given a browser, when I browse to the site, then I see an "Add Person" button.', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.addPerson').length).toEqual(1)
        expect(wrapper.find('.addPerson').text()).toEqual('Add Person')

    })

    it('Given I see the "Add Person" button, when I click it, then I am taken to an Add Person page.', () => {
        //setup
        const wrapper = shallow(<App/>);
        //exercise
        wrapper.find('.addPerson').simulate('click');
        //verify
        expect(wrapper.find('PersonAdd').length).toEqual(1)
        expect(wrapper.state().showAdd).toEqual(true)
    })
    it('Given I am on the Add Person page, when I fill in the fields and click "Add", I am taken back to the list page.', () => {
        const appWrapper = shallow(<App/>);
        const expected = {firstName: 'first', lastName: 'last'};
        appWrapper.setState({showAdd: true});
        appWrapper.instance().addPerson(expected);
        appWrapper.update();

        const personList = appWrapper.find('PersonList');

        // Assert
        expect(appWrapper.state().showAdd).toEqual(false)
        expect(personList.props().people).toContainEqual(expected);

    })

});


//enzyme
//sinon (mocking)
//jest (describe and it) (jest plugin)
//fetch-mock


// const spy = sinon.spy()
// const wrapper = shallow(<PersonList onAddPerson={spy}/>)
// wrapper.find('Button').simulate('click');
//
// expect(wrapper.find('PersonList').length).toEqual(1);
//expect(wrapper.state().view).toEqual('thing')
//wrapper.update()
//wrapper.instance().onAddPerson() //make a call
// expect(spy.calledOnce).toEqual(true)
//
//     Given that I see people in the list, when I click a person, I am taken to a Person Edit page.
//     Given I am on the person edit page, when I change a persons name and click Save, then I am taken back to the list page.
//     Given that I have made updates to people, when I am on the list page, I should see the modified information.
//     Given that I am on the edit page, then I see a delete button.
//     Given that I am on the edit page, when I click the delete button, then I am taken back to the list page.
//     Given that I have deleted a person, when I am on the list page, then I no longer see the deleted people.