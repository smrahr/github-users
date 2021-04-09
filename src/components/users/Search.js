import React, { useState } from 'react'

const Search = (props) => {

    // state = {
    //     text: '',
    //   };

    const [text , setText] =useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
          props.showAlert('Please enter something', 'light');
        } else {
          props.onSearchHandler(text);
          setText('');
        }
      };

    // const handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    const handleChange = (e) => setText(e.target.value);
    const {showClear , clearUsers} = props;
        return (
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' name='text' placeholder='Search Users...' value={text} onChange={handleChange} autoComplete='off' />
                    {/* <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChangeHandler} autoComplete="off" /> */}
                    <input type='submit' className='btn btn-block btn-dark'/>
                </form>
                {showClear && <button className='btn btn-block btn-light' onClick={clearUsers}>clear</button>}                
            </div>
        )
    
}

export default Search
