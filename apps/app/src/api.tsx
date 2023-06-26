// import { forwardRef } from 'react'
const TestApi = () => {
	return (
		<div>
			<form>
				<div>
				<h2>
					Sign in with your email address
				</h2>
				</div>
				<div>
				<p></p>
				</div>
				<div>
				<div>
					<label>Email Address</label>
					<div>
					<p></p>
					</div>
					<input type="email" />
				</div>
				<div>
					<div>
					<label>Password</label>
					<a>Forgot your password?</a>
					</div>
					<div>
					<p></p>
					</div>
					<input type="password" />
				</div>
				<div></div>

				<div>
					<button>
					Sign in
					</button>
				</div>
				</div>
				<div>
				<h2>OR</h2>
				</div>
				<div>
				<p>
					Don't have an account?
					<a>
					Sign up now
					</a>
				</p>
				</div>
			</form>
		</div>
	)
}

// const Api = forwardRef<HTMLDivElement, {}>(function Api(_,ref) {

// 	return (
// 		<div id="api" ref={ref} role="main" >
// 		{
// 			process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && <TestApi />
// 		}
// 		</div>
// 	)
// })


// import { forwardRef } from 'react';

const Api = () => {
	return (
	  <div id="api" role="main">
		{process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && <TestApi />}
	  </div>
	)
}

// Api.displayName = 'Api';
export default Api
		// <div className="container">
		// 	<p>Para 1</p>
		// 	<p className="para-2">Para 2</p>
		// </div>
