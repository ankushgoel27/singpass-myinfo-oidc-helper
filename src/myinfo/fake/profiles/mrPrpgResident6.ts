import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S4169135B";
const name = ProfileArchetype.MR_PRPG_RESIDENT_6;

export const mrPrpgResident6: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1941-02-28",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "276";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "14";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "663A";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "PUNGGOL DRIVE";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "821663";

		return profile;
	},
};
