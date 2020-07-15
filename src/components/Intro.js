import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setReduxToTrue } from '../actions/test';

const Intro = ({ setReduxToTrue }) => {
  useEffect(() => {
    setReduxToTrue();
  }, []);
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl text-blue-700 text-center font-semibold'>
        You have now a minimal React / Tailwind configuration up and running !
      </h1>
      <br />
      <span className='text-2xl md:text-4xl lg:text-6xl text-blue-700 text-center mt-4'>
        Happy coding !
      </span>
    </div>
  );
};

Intro.propTypes = {
  setReduxToTrue: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setReduxToTrue: () => dispatch(setReduxToTrue()),
});
export default connect(null, mapDispatchToProps)(Intro);
