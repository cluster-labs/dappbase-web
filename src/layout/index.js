import React, { Component, Fragment } from 'react'
import DashboardLayout from './dashboardLayout'
import HomeLayout from './homeLayout'

class Index extends Component {
    render() {
        return (
            <Fragment>
                {
                    window.location.pathname.split('/')[1] == "project" ?
                        <DashboardLayout>
                            {this.props.children}
                        </DashboardLayout>
                        :
                        <HomeLayout>
                            {this.props.children}
                        </HomeLayout>

                }
            </Fragment>
        )
    }
}

export default Index