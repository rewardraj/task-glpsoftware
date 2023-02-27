import React from 'react'

const Form = () => {
  return (
    <section className="form__Section">
        <div className="form__Group">
          <label className="form__label" for="input1">input 1</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label className="form__label" for="input2">input 2</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label className="form__label" for="input3">input 3</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label className="form__label" for="input4">input 4</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label className="form__label" for="input5">input 5</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label className="form__label" for="input6">input 6</label>
          <input type="text" id="input1" name="input1" />
        </div>

        <div className="form__Group">
          <label for="textarea">Textarea</label>
          <textarea type="text" id="textarea" name="textarea"></textarea>
          <button className="form__btn">Send</button>
        </div>
      </section>
  )
}

export default Form
