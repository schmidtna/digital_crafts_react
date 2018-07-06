import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
renderField(field) {
    return (
        <div className="form-group">
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text" 
                {...field.input}
                //this passes in all pre generated event handlers like onChange, onFocus etc., all at once
            />
            {field.meta.error}
            {/* errors object is built into redux fomr to wire into this meta automatically */}
        </div>
    )

}

onSubmit(values) {
    console.log(values);

}

    render() {
const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate (values) {
    const errors = {};
    // If errors returns empty, the form will submit
    // If errors has any properties, reduxt form assumes form is invalid
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title of at least 3 characters!"
    }

    if (!values.categories) {
        errors.categories = "Enter some categoreis"
    }

    if (!values.content) {
        errors.content = "Enter some content for your post"
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);