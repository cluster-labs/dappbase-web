import React, { Component, Fragment } from 'react'
import DashboardLayout from './dashboardLayout'
import HomeLayout from './homeLayout'

class Index extends Component {
    render() {
        return (
            <Fragment>
                <HomeLayout>
                    {this.props.children}
                </HomeLayout>
                {
                    /* window.location.pathname.split('/')[1] == "" ?
                        <HomeLayout>
                            {this.props.children}
                        </HomeLayout>
                        :
                        <DashboardLayout>
                            {this.props.children}
                        </DashboardLayout> */
                }
            </Fragment>
        )
    }
}

export default Index