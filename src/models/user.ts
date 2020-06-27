/*
This lines of code licensed under Not to copy or sell some sort of this shit
//Boiler plate License
//License Owner:
A. Taha Baki @atahabaki
*/
enum UserType {ROOT=0,BLOGGER=1,MEMBER=2,VISITOR=3}

class User {
	//Password
	private _limit:number=25
	//change it when user changes password
	//randomly generated password strongifier
	private rnd:string
	//combination of hashed user's entered password
	//and the rnd's hash
	//cool huh
	private _psswd:string

	//General
	private _fname:string
	private _uname:string
	public utype:UserType

	constructor(fname:string,uname:string,utype:UserType,password:string) {
		this._fname = fname
		this._uname = uname
		this.utype = utype
		this.rnd=this.gen_random(this._limit)
		this._psswd=this.gen_psswd(password)
	}

	get fname():string {
		return this.fname
	}

	set fname(fullname) {
		this._fname = fullname
	}

	get uname():string {
		return this.uname
	}

	set uname(username:string) {
		this._uname = username
	}

	get psswd():string {
		return this.psswd
	}

	set psswd(pwd:string) {
		this.rnd=this.gen_random(this._limit)
		this._psswd=this.gen_psswd(pwd)
	}

	private gen_random(limit:number): string {
		let _temp = ""
		function randomBetween(min: number, max: number): number {
			return Math.random() * (max-min) + min
		}
		function genRandomString(limit: number): string { 
			for (let _i = 0; _i < limit; _i++) {
				if (randomBetween(0, 1)==0) {
					_temp += String.fromCharCode(randomBetween(33, 47))
				}
				else _temp += String.fromCharCode(randomBetween(58, 126))
			}
		return _temp
		}
		return genRandomString(limit)
	}

	private gen_psswd(password:string):string {
		this.rnd;
		let	_password:string = password;
		return _password;
	}

	public map():Object {
		return {
			fullname: this._fname,
			username: this._uname,
			password: this._psswd,
			usertype: this.utype
		}
	}
}
