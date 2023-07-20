// TestApi is a component that resembles the markup that AD B2C will return.
// It is used to test the API markup locally.
const TestApi = () => {
  return (
    <form>
      <div>
        <h2>Sign in with your email address</h2>
      </div>
      <div className='error'>
        <p></p>
      </div>
      <div>
        <div>
          <label>Email Address</label>
          <div className='error'>
            <p>Error messages will be handled by AD B2C.</p>
          </div>
          <input className='highlightError' type='email' />
        </div>
        <div>
          <div>
            <label>Password</label>
            <a>Forgot your password?</a>
          </div>
          <div>
            <p></p>
          </div>
          <input type='password' />
        </div>
        <div></div>

        <div>
          <button>Sign in</button>
        </div>
      </div>
      <div>
        <h2>OR</h2>
      </div>
      <div>
        <p>
          Don't have an account?
          <a>Sign up now</a>
        </p>
      </div>
    </form>
  )
}

const Api = () => {
  return (
    <div id='api' role='main'>
      {process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && <TestApi />}
    </div>
  )
}

export default Api
