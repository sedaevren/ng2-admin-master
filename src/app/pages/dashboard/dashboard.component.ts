import { Component } from '@angular/core';
import { Feature } from './feature-model';
import { Feature2 } from './feature2-model';
import { map } from 'rxjs/operator/map';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  Math: any;
  acquisitionChannels = 'En Yüksek ';
  // orijinal data
  datas: Feature[] = [];
  datas2: Feature2[] = [];
  // en yüksek reqeust data
  dataForMostRequestTime: Feature[] = [];  // for most req time
  dataForAvgRequestTime: Feature[] = [];   // for avg req time
  dataForCount: Feature[] = [];            // for req count
  dataForMostDate: Feature2[] = [];
  dataForChart: any = {};
  optionForChart: any = {};

  constructor() {
    this.Math = Math;
    this.datas =
      [
        {
          'maxTime': 30041,
          'minTime': 6453,
          'avgTime': 18949,
          'count': 4,
          'requestRouteTemplate': 'api/GetUserPostponesCountReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 31355,
          'minTime': 127,
          'avgTime': 13325,
          'count': 3,
          'requestRouteTemplate': 'api/CreateTaskUserRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 16720,
          'minTime': 1965,
          'avgTime': 9342,
          'count': 2,
          'requestRouteTemplate': 'api/GetDepartmentOnTimeReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 187788,
          'minTime': 78,
          'avgTime': 7334,
          'count': 75,
          'requestRouteTemplate': 'api/Files/UploadFileBlob',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 4336,
          'minTime': 4336,
          'avgTime': 4336,
          'count': 1,
          'requestRouteTemplate': 'api/GetDepartmentReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 5483,
          'minTime': 2111,
          'avgTime': 3915,
          'count': 6,
          'requestRouteTemplate': 'api/MarkAsRead',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 4170,
          'minTime': 1469,
          'avgTime': 3003,
          'count': 6,
          'requestRouteTemplate': 'api/GetMailBody',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 4379,
          'minTime': 360,
          'avgTime': 1953,
          'count': 8,
          'requestRouteTemplate': 'api/GetUserLateTaskReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 6692,
          'minTime': 219,
          'avgTime': 1690,
          'count': 6,
          'requestRouteTemplate': 'api/GetArchives',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1646,
          'minTime': 1560,
          'avgTime': 1603,
          'count': 2,
          'requestRouteTemplate': 'api/GetUserAvgLateTaskTimeReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 3788,
          'minTime': 31,
          'avgTime': 907,
          'count': 7,
          'requestRouteTemplate': 'api/GetLocalInboxV2',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 9128,
          'minTime': 47,
          'avgTime': 764,
          'count': 614,
          'requestRouteTemplate': 'api/Tasks/v2',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 2719,
          'minTime': 188,
          'avgTime': 758,
          'count': 8,
          'requestRouteTemplate': 'api/EditNetworkUserRelationList',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 1913,
          'minTime': 219,
          'avgTime': 749,
          'count': 10,
          'requestRouteTemplate': 'api/GetTagReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1110,
          'minTime': 188,
          'avgTime': 649,
          'count': 2,
          'requestRouteTemplate': 'api/SendMeetingReportMail/{meetingId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1172,
          'minTime': 93,
          'avgTime': 632,
          'count': 2,
          'requestRouteTemplate': 'api/Account/Register',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 20226,
          'minTime': 30,
          'avgTime': 620,
          'count': 639,
          'requestRouteTemplate': 'api/GetUnreadHistories',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 6253,
          'minTime': 46,
          'avgTime': 548,
          'count': 52,
          'requestRouteTemplate': 'api/GetUserReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 547,
          'minTime': 531,
          'avgTime': 539,
          'count': 2,
          'requestRouteTemplate': 'api/MailTopic/{MailTopicId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 3329,
          'minTime': 31,
          'avgTime': 530,
          'count': 11,
          'requestRouteTemplate': 'api/GetLateTasks',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1741,
          'minTime': 125,
          'avgTime': 490,
          'count': 11,
          'requestRouteTemplate': 'api/CreateMeetingFromCalendar',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 453,
          'minTime': 453,
          'avgTime': 453,
          'count': 1,
          'requestRouteTemplate': 'api/GetTemplateTaskRelationByTemplateId/{templateId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1205,
          'minTime': 47,
          'avgTime': 439,
          'count': 3,
          'requestRouteTemplate': 'api/Meetings/{meetingId}/History',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 422,
          'minTime': 422,
          'avgTime': 422,
          'count': 1,
          'requestRouteTemplate': 'api/GetUserAvgCompletionTimeReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 734,
          'minTime': 60,
          'avgTime': 372,
          'count': 8,
          'requestRouteTemplate': 'api/GetOthersTasksBySupervisor',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 797,
          'minTime': 157,
          'avgTime': 369,
          'count': 11,
          'requestRouteTemplate': 'api/MeetingNoteTaskMeetings',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 984,
          'minTime': 165,
          'avgTime': 356,
          'count': 7,
          'requestRouteTemplate': 'api/TaskRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 322,
          'minTime': 322,
          'avgTime': 322,
          'count': 1,
          'requestRouteTemplate': 'api/CreateTemplate',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 329,
          'minTime': 266,
          'avgTime': 298,
          'count': 5,
          'requestRouteTemplate': 'api/TaskCommentsForSchneider/{code}',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 712,
          'minTime': 95,
          'avgTime': 294,
          'count': 355,
          'requestRouteTemplate': 'api/TaskTagPoolRelationForSchneider/{code}',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 5254,
          'minTime': 78,
          'avgTime': 283,
          'count': 129,
          'requestRouteTemplate': 'api/TaskUserRelations/{id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 2822,
          'minTime': 78,
          'avgTime': 280,
          'count': 29,
          'requestRouteTemplate': 'api/SearchInArchives',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 272,
          'minTime': 272,
          'avgTime': 272,
          'count': 1,
          'requestRouteTemplate': 'api/Topics/{Id}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 3471,
          'minTime': 78,
          'avgTime': 271,
          'count': 249,
          'requestRouteTemplate': 'api/Tasks',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 2188,
          'minTime': 78,
          'avgTime': 261,
          'count': 79,
          'requestRouteTemplate': 'api/GetHistories',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1373,
          'minTime': 15,
          'avgTime': 247,
          'count': 21,
          'requestRouteTemplate': 'api/MeetingUserRelations/{Id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 4544,
          'minTime': 31,
          'avgTime': 246,
          'count': 568,
          'requestRouteTemplate': 'api/Meetings/v2',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 397,
          'minTime': 94,
          'avgTime': 245,
          'count': 2,
          'requestRouteTemplate': 'api/Networks',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1503,
          'minTime': 78,
          'avgTime': 232,
          'count': 37,
          'requestRouteTemplate': 'api/Meetings/{id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 703,
          'minTime': 94,
          'avgTime': 230,
          'count': 7,
          'requestRouteTemplate': 'api/Meetings',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1562,
          'minTime': 26,
          'avgTime': 228,
          'count': 571,
          'requestRouteTemplate': 'api/MailAccounts/{userId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1556,
          'minTime': 63,
          'avgTime': 224,
          'count': 67,
          'requestRouteTemplate': 'api/TaskFiles',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 5282,
          'minTime': 15,
          'avgTime': 222,
          'count': 570,
          'requestRouteTemplate': 'api/GetCalendarMeetings',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 3115,
          'minTime': 47,
          'avgTime': 205,
          'count': 615,
          'requestRouteTemplate': 'api/Tasks/{id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 1462,
          'minTime': 78,
          'avgTime': 203,
          'count': 387,
          'requestRouteTemplate': 'api/TaskTagPoolRelation',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 422,
          'minTime': 109,
          'avgTime': 202,
          'count': 19,
          'requestRouteTemplate': 'api/TaskTagPoolRelation/{id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 786,
          'minTime': 15,
          'avgTime': 188,
          'count': 736,
          'requestRouteTemplate': 'api/TaskUserRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1780,
          'minTime': 46,
          'avgTime': 187,
          'count': 230,
          'requestRouteTemplate': 'api/Tasks/{id}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 219,
          'minTime': 157,
          'avgTime': 182,
          'count': 3,
          'requestRouteTemplate': 'api/TaskTagRelationsForSchneider/{code}',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 672,
          'minTime': 31,
          'avgTime': 175,
          'count': 50,
          'requestRouteTemplate': 'api/Networks/TreeView/{networkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 3007,
          'minTime': 18,
          'avgTime': 174,
          'count': 570,
          'requestRouteTemplate': 'api/Invites',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 219,
          'minTime': 85,
          'avgTime': 174,
          'count': 3,
          'requestRouteTemplate': 'api/MeetingComments',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 251,
          'minTime': 109,
          'avgTime': 174,
          'count': 6,
          'requestRouteTemplate': 'api/MeetingTagRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 438,
          'minTime': 63,
          'avgTime': 157,
          'count': 18,
          'requestRouteTemplate': 'api/Invites',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 603,
          'minTime': 48,
          'avgTime': 155,
          'count': 16,
          'requestRouteTemplate': 'api/Meetings/{id}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 250,
          'minTime': 80,
          'avgTime': 151,
          'count': 3,
          'requestRouteTemplate': 'api/TaskComments/{id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 2008,
          'minTime': 15,
          'avgTime': 143,
          'count': 424,
          'requestRouteTemplate': 'api/GetNetworksAdminRequestList',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 142,
          'minTime': 142,
          'avgTime': 142,
          'count': 1,
          'requestRouteTemplate': 'api/MeetingFiles',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 988,
          'minTime': 75,
          'avgTime': 142,
          'count': 386,
          'requestRouteTemplate': 'api/TaskComments',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 141,
          'minTime': 141,
          'avgTime': 141,
          'count': 1,
          'requestRouteTemplate': 'api/MeetingTagRelations/{id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 390,
          'minTime': 78,
          'avgTime': 138,
          'count': 14,
          'requestRouteTemplate': 'api/MeetingTagPoolRelation',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 555,
          'minTime': 62,
          'avgTime': 134,
          'count': 15,
          'requestRouteTemplate': 'api/GetNetworkOnTimeReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 171,
          'minTime': 95,
          'avgTime': 132,
          'count': 3,
          'requestRouteTemplate': 'api/Topics',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 250,
          'minTime': 62,
          'avgTime': 131,
          'count': 23,
          'requestRouteTemplate': 'api/TaskTagRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 5741,
          'minTime': 15,
          'avgTime': 125,
          'count': 2663,
          'requestRouteTemplate': 'api/MultipleMarkAsReadForHistory',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 735,
          'minTime': 31,
          'avgTime': 124,
          'count': 43,
          'requestRouteTemplate': 'api/CreateArchiveRelationsByIds',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 268,
          'minTime': 62,
          'avgTime': 117,
          'count': 42,
          'requestRouteTemplate': 'api/MeetingNotes',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 328,
          'minTime': 62,
          'avgTime': 110,
          'count': 20,
          'requestRouteTemplate': 'api/Invites',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 141,
          'minTime': 93,
          'avgTime': 109,
          'count': 3,
          'requestRouteTemplate': 'api/Account/ChangePassword',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 140,
          'minTime': 78,
          'avgTime': 109,
          'count': 2,
          'requestRouteTemplate': 'api/MeetingUserRelations/{Id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 998,
          'minTime': 31,
          'avgTime': 106,
          'count': 61,
          'requestRouteTemplate': 'api/DownloadTaskFile/{Id}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 109,
          'minTime': 94,
          'avgTime': 104,
          'count': 3,
          'requestRouteTemplate': 'api/UserMobileDevices',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 359,
          'minTime': 47,
          'avgTime': 103,
          'count': 19,
          'requestRouteTemplate': 'api/UpdateUserInDomainNetwork',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 266,
          'minTime': 16,
          'avgTime': 101,
          'count': 4,
          'requestRouteTemplate': 'api/Meetings/{meetingId}/MeetingRelations',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 111,
          'minTime': 83,
          'avgTime': 97,
          'count': 2,
          'requestRouteTemplate': 'api/GetNetworksTags',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 157,
          'minTime': 48,
          'avgTime': 94,
          'count': 3,
          'requestRouteTemplate': 'api/SendInviteMailFromRegister',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 157,
          'minTime': 46,
          'avgTime': 90,
          'count': 23,
          'requestRouteTemplate': 'api/MeetingAgendas',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 125,
          'minTime': 50,
          'avgTime': 86,
          'count': 26,
          'requestRouteTemplate': 'api/MeetingUserRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1422,
          'minTime': 15,
          'avgTime': 85,
          'count': 740,
          'requestRouteTemplate': 'api/Networks/{networkId}/NetworkUserRelationsWeb',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 159,
          'minTime': 62,
          'avgTime': 83,
          'count': 7,
          'requestRouteTemplate': 'api/ResetUserPassword',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 205,
          'minTime': 47,
          'avgTime': 82,
          'count': 5,
          'requestRouteTemplate': 'api/SetSyncFolders',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 139,
          'minTime': 31,
          'avgTime': 82,
          'count': 4,
          'requestRouteTemplate': 'api/GetDepartmentsByNetworkId/{networkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 81,
          'minTime': 81,
          'avgTime': 81,
          'count': 1,
          'requestRouteTemplate': 'api/NetworkUserRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 321,
          'minTime': 15,
          'avgTime': 79,
          'count': 51,
          'requestRouteTemplate': 'api/Tasks/{taskId}/TaskRelations',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 220,
          'minTime': 31,
          'avgTime': 78,
          'count': 66,
          'requestRouteTemplate': 'api/GetOnlineUsersWeb/{code}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 109,
          'minTime': 48,
          'avgTime': 78,
          'count': 2,
          'requestRouteTemplate': 'api/WorkEvent/{workEventId}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 140,
          'minTime': 31,
          'avgTime': 77,
          'count': 3,
          'requestRouteTemplate': 'api/GetTemplateByRootNetworkId/{rootNetworkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 110,
          'minTime': 47,
          'avgTime': 73,
          'count': 3,
          'requestRouteTemplate': 'api/TaskArchiveRelations/{Id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 94,
          'minTime': 47,
          'avgTime': 73,
          'count': 16,
          'requestRouteTemplate': 'api/MeetingAgendas/{id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 267,
          'minTime': 15,
          'avgTime': 71,
          'count': 167,
          'requestRouteTemplate': 'api/GetUsersByRootNetworkIdWeb/{rootNetworkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 359,
          'minTime': 31,
          'avgTime': 70,
          'count': 234,
          'requestRouteTemplate': 'api/TaskArchiveRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 94,
          'minTime': 32,
          'avgTime': 66,
          'count': 9,
          'requestRouteTemplate': 'api/MeetingNotes/{id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 63,
          'minTime': 62,
          'avgTime': 62,
          'count': 2,
          'requestRouteTemplate': 'api/Networks/TreeViewToolTip/{networkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 204,
          'minTime': 27,
          'avgTime': 62,
          'count': 82,
          'requestRouteTemplate': 'api/GetWorkEventByUserId',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 156,
          'minTime': 32,
          'avgTime': 61,
          'count': 17,
          'requestRouteTemplate': 'api/GetNetworkReport',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 1316,
          'minTime': 15,
          'avgTime': 61,
          'count': 878,
          'requestRouteTemplate': 'api/Tasks/{taskId}/Comments',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 750,
          'minTime': 15,
          'avgTime': 60,
          'count': 53,
          'requestRouteTemplate': 'api/Tasks/{taskId}/History',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 557,
          'minTime': 10,
          'avgTime': 59,
          'count': 32,
          'requestRouteTemplate': 'api/Meetings/{meetingId}/Notes',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1390,
          'minTime': 30,
          'avgTime': 58,
          'count': 615,
          'requestRouteTemplate': 'api/Users/{userId}/Networks',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1070,
          'minTime': 15,
          'avgTime': 57,
          'count': 889,
          'requestRouteTemplate': 'api/GetTopicsByNetworkId/{networkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 1388,
          'minTime': 31,
          'avgTime': 57,
          'count': 574,
          'requestRouteTemplate': 'api/GetProfile/{userId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 250,
          'minTime': 31,
          'avgTime': 57,
          'count': 26,
          'requestRouteTemplate': 'api/WorkEvent',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 83,
          'minTime': 47,
          'avgTime': 55,
          'count': 9,
          'requestRouteTemplate': 'api/WorkEvent',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 128,
          'minTime': 31,
          'avgTime': 52,
          'count': 10,
          'requestRouteTemplate': 'api/GetTagPoolByNetworkIds',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 141,
          'minTime': 31,
          'avgTime': 51,
          'count': 38,
          'requestRouteTemplate': 'api/GetUsersCountWeb/{code}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 125,
          'minTime': 16,
          'avgTime': 48,
          'count': 32,
          'requestRouteTemplate': 'api/TaskUserWorkspaces',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 62,
          'minTime': 32,
          'avgTime': 47,
          'count': 3,
          'requestRouteTemplate': 'api/NetworkUserRelations/{id}',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 703,
          'minTime': 15,
          'avgTime': 45,
          'count': 1462,
          'requestRouteTemplate': 'api/TagPoolByNetworkId/{networkId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 47,
          'minTime': 35,
          'avgTime': 41,
          'count': 2,
          'requestRouteTemplate': 'api/IsUsernameUsed',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 94,
          'minTime': 15,
          'avgTime': 41,
          'count': 3,
          'requestRouteTemplate': 'api/Locations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 125,
          'minTime': 16,
          'avgTime': 40,
          'count': 24,
          'requestRouteTemplate': 'api/TaskUserWorkspaces/{id}',
          'requestMethod': 'DELETE',
        },
        {
          'maxTime': 140,
          'minTime': 15,
          'avgTime': 39,
          'count': 126,
          'requestRouteTemplate': 'api/ProfileSetting/{userId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 63,
          'minTime': 16,
          'avgTime': 37,
          'count': 5,
          'requestRouteTemplate': 'api/GetUnreadMeetingUsersByMeetingCommentId/{meetingCommentId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 156,
          'minTime': 15,
          'avgTime': 37,
          'count': 145,
          'requestRouteTemplate': 'api/Networks/{Id}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 113,
          'minTime': 15,
          'avgTime': 37,
          'count': 40,
          'requestRouteTemplate': 'api/MeetingArchiveRelations',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 234,
          'minTime': 0,
          'avgTime': 36,
          'count': 41,
          'requestRouteTemplate': 'api/Meetings/{meetingId}/Agendas',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 110,
          'minTime': 15,
          'avgTime': 34,
          'count': 42,
          'requestRouteTemplate': 'api/GetUnreadTaskUsersByTaskCommentId/{taskCommentId}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 46,
          'minTime': 15,
          'avgTime': 33,
          'count': 5,
          'requestRouteTemplate': 'api/TaskFilesForSchneider',
          'requestMethod': 'POST',
        },
        {
          'maxTime': 32,
          'minTime': 32,
          'avgTime': 32,
          'count': 1,
          'requestRouteTemplate': 'api/Account/ExternalLogin',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 941,
          'minTime': 9,
          'avgTime': 32,
          'count': 1002,
          'requestRouteTemplate': 'api/Networks/{networkId}/Tags',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 735,
          'minTime': 12,
          'avgTime': 31,
          'count': 7607,
          'requestRouteTemplate': 'api/GetOnlineUsers/{code}',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 78,
          'minTime': 15,
          'avgTime': 31,
          'count': 20,
          'requestRouteTemplate': 'api/Meetings/{meetingId}/Comments',
          'requestMethod': 'GET',
        },
        {
          'maxTime': 95,
          'minTime': 15,
          'avgTime': 29,
          'count': 125,
          'requestRouteTemplate': 'api/TaskUserWorkspaces',
          'requestMethod': 'PUT',
        },
        {
          'maxTime': 94,
          'minTime': 0,
          'avgTime': 15,
          'count': 38,
          'requestRouteTemplate': 'api/Networks/{networkId}/Locations',
          'requestMethod': 'GET',
        },
      ];

    this.datas2 =
      [
        {
          'requestRouteTemplate': 'api/Tasks',
          'requestMethod': 'POST',
          'numberCount': 6,
          'requestDate': '07/01/2017',
        },
        {
          'requestRouteTemplate': 'api/Tasks',
          'requestMethod': 'POST',
          'numberCount': 3,
          'requestDate': '07/02/2017',
        },
        {
          'requestRouteTemplate': 'api/MeetingComments',
          'requestMethod': 'POST',
          'numberCount': 1,
          'requestDate': '07/03/2017',
        },
        {
          'requestRouteTemplate': 'api/Meetings',
          'requestMethod': 'POST',
          'numberCount': 2,
          'requestDate': '07/03/2017',
        },
        {
          'requestRouteTemplate': 'api/TaskComments',
          'requestMethod': 'POST',
          'numberCount': 99,
          'requestDate': '07/03/2017',
        },
        {
          'requestRouteTemplate': 'api/Tasks',
          'requestMethod': 'POST',
          'numberCount': 72,
          'requestDate': '07/03/2017',
        },
        {
          'requestRouteTemplate': 'api/MeetingComments',
          'requestMethod': 'POST',
          'numberCount': 2,
          'requestDate': '07/04/2017',
        },
        {
          'requestRouteTemplate': 'api/Meetings',
          'requestMethod': 'POST',
          'numberCount': 2,
          'requestDate': '07/04/2017',
        },
        {
          'requestRouteTemplate': 'api/TaskComments',
          'requestMethod': 'POST',
          'numberCount': 105,
          'requestDate': '07/04/2017',
        },
        {
          'requestRouteTemplate': 'api/Tasks',
          'requestMethod': 'POST',
          'numberCount': 36,
          'requestDate': '07/04/2017',
        },
      ];

    this.calculateMostResponseTime();   // for most req time
    this.calculateAvgResponseTime();    // for avg req time
    this.calculateRequestCount();       // for req count
    this.sortFeatureDate();   

    this.dataForChart = {
      labels: ['01/07', '02/07', '03/07', '04/07'],
      series: [
        [6, 10, 0, 12, 14],    // MeetingComment
        [10, 45, 30, 14, 12],  // Meeting
        [34, 12, 12, 40, 50],  // TaskComment
        [10, 43, 25, 22, 16],  // Task
      ],
    };
    this.optionForChart = {
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40,
      },
    };
  }
  max: number; 
  
  // FOR LINECHART 
  sortFeatureDate() {
    this.dataForMostDate = this.datas2
      .sort((a, b) => {
        if (a.requestDate > b.requestDate) {
          return -1;
        }
        if (a.requestDate < b.requestDate) {
          return 1;
        }

        return 0;
      });
  }

// FOR MOST REQUEST TIME
  calculateMostResponseTime() {
    this.dataForMostRequestTime = this.datas
      .sort((a, b) => {
        if (a.maxTime > b.maxTime) {
          return -1;
        }
        if (a.maxTime < b.maxTime) {
          return 1;
        }

        return 0;
      }).filter((tempData, index) => {
        if (index < 6 ) {
          return true;
        }
        return false;
      });
  }
  // FOR AVERAGE REQUEST TIME
  calculateAvgResponseTime() {
    this.dataForAvgRequestTime = this.datas
      .sort((a, b) => {
        if (a.avgTime > b.avgTime) {
          return -1;
        }
        if (a.avgTime < b.avgTime) {
          return 1;
        }

        return 0;
      }).filter((tempData, index) => {
        if (index < 6 ) {
          return true;
        }
        return false;
      });
  }
  // FOR COUNT REQUEST 
  calculateRequestCount() {
     this.dataForCount = this.datas
      .sort((a, b) => {
        if (a.count > b.count) {
          return -1;
        }
        if (a.count < b.count) {
          return 1;
        }

        return 0;
      }).filter((tempData, index) => {
        if (index < 5 ) {
          return true;
        }
        return false;
      });

  }

  // PERCENTAGE FOR HTML
  calculatePercentage(portion: number, denominator: number): Number {
    return portion * 100 / denominator;
  }

}
