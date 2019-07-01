import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
  members: MemberEntity[],
  fetchMembers(): void;
}
export class MembersPage extends React.Component<Props, {}> {
    constructor(props) {
      super(props)
      this.state = {
        members: []
      }
    }
    public componentDidMount() {
      this.props.fetchMembers()
    }
    public render() {
      return (
        <div className="row">
          <h2>members page</h2>
          <table className="table">
            <thead>members/page</thead>
            <tbody>
              {
                this.props.members.length
              }
            </tbody>
          </table>
        </div>
      )
    }
}