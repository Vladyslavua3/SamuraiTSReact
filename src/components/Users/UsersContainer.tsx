import React, { FC } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  follow,
  getUsersTC,
  InitialType,
  setCurrentPageAC,
  toggleIsFollowing,
  unfollow,
} from '../../redux/usersReducer';
import { Preloader } from '../common/Preloader';

import { Users } from './Users';

export type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: InitialType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalCount: (total: number) => void;
  setIsFetching: (isFetching: boolean) => void;
  toggleIsFollowing: (isFetching: boolean, userId: number) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
};

export type mapStateType = {
  users: InitialType;
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

export type usersContainerType = mapDispatchType & mapStateType;

class UsersContainer extends React.Component<usersContainerType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateType => ({
  users: state.usersPage,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default compose<FC>(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage: setCurrentPageAC,
    toggleIsFollowing,
    getUsersTC,
  }),
)(UsersContainer);
