//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./SearchAPIProxy_types');
//HELPER FUNCTIONS AND STRUCTURES

SearchAPIProxy_searcher_args = function(args) {
  this.cl = null;
  this.query = null;
  this.pageNum = null;
  this.highlight = null;
  this.userId = null;
  if (args) {
    if (args.cl !== undefined) {
      this.cl = args.cl;
    }
    if (args.query !== undefined) {
      this.query = args.query;
    }
    if (args.pageNum !== undefined) {
      this.pageNum = args.pageNum;
    }
    if (args.highlight !== undefined) {
      this.highlight = args.highlight;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
  }
};
SearchAPIProxy_searcher_args.prototype = {};
SearchAPIProxy_searcher_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.cl = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pageNum = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.highlight = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.userId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_searcher_args.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_searcher_args');
  if (this.cl !== null && this.cl !== undefined) {
    output.writeFieldBegin('cl', Thrift.Type.I32, 1);
    output.writeI32(this.cl);
    output.writeFieldEnd();
  }
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 2);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.pageNum !== null && this.pageNum !== undefined) {
    output.writeFieldBegin('pageNum', Thrift.Type.I32, 3);
    output.writeI32(this.pageNum);
    output.writeFieldEnd();
  }
  if (this.highlight !== null && this.highlight !== undefined) {
    output.writeFieldBegin('highlight', Thrift.Type.BOOL, 4);
    output.writeBool(this.highlight);
    output.writeFieldEnd();
  }
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I64, 5);
    output.writeI64(this.userId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_searcher_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchAPIProxy_searcher_result.prototype = {};
SearchAPIProxy_searcher_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_searcher_result.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_searcher_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getThesisDetail_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
SearchAPIProxy_getThesisDetail_args.prototype = {};
SearchAPIProxy_getThesisDetail_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getThesisDetail_args.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getThesisDetail_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getThesisDetail_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchAPIProxy_getThesisDetail_result.prototype = {};
SearchAPIProxy_getThesisDetail_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getThesisDetail_result.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getThesisDetail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getMagazineDetail_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
SearchAPIProxy_getMagazineDetail_args.prototype = {};
SearchAPIProxy_getMagazineDetail_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getMagazineDetail_args.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getMagazineDetail_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getMagazineDetail_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchAPIProxy_getMagazineDetail_result.prototype = {};
SearchAPIProxy_getMagazineDetail_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getMagazineDetail_result.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getMagazineDetail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getPatentDetail_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
SearchAPIProxy_getPatentDetail_args.prototype = {};
SearchAPIProxy_getPatentDetail_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getPatentDetail_args.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getPatentDetail_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_getPatentDetail_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchAPIProxy_getPatentDetail_result.prototype = {};
SearchAPIProxy_getPatentDetail_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_getPatentDetail_result.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_getPatentDetail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_find4related4expert_args = function(args) {
  this.query = null;
  if (args) {
    if (args.query !== undefined) {
      this.query = args.query;
    }
  }
};
SearchAPIProxy_find4related4expert_args.prototype = {};
SearchAPIProxy_find4related4expert_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_find4related4expert_args.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_find4related4expert_args');
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 1);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxy_find4related4expert_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchAPIProxy_find4related4expert_result.prototype = {};
SearchAPIProxy_find4related4expert_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchAPIProxy_find4related4expert_result.prototype.write = function(output) {
  output.writeStructBegin('SearchAPIProxy_find4related4expert_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchAPIProxyClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
SearchAPIProxyClient.prototype = {};
SearchAPIProxyClient.prototype.seqid = function() { return this._seqid; }
SearchAPIProxyClient.prototype.new_seqid = function() { return this._seqid += 1; }
SearchAPIProxyClient.prototype.searcher = function(cl, query, pageNum, highlight, userId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_searcher(cl, query, pageNum, highlight, userId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_searcher(cl, query, pageNum, highlight, userId);
  }
};

SearchAPIProxyClient.prototype.send_searcher = function(cl, query, pageNum, highlight, userId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('searcher', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchAPIProxy_searcher_args();
  args.cl = cl;
  args.query = query;
  args.pageNum = pageNum;
  args.highlight = highlight;
  args.userId = userId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchAPIProxyClient.prototype.recv_searcher = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchAPIProxy_searcher_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('searcher failed: unknown result');
};
SearchAPIProxyClient.prototype.getThesisDetail = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getThesisDetail(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getThesisDetail(id);
  }
};

SearchAPIProxyClient.prototype.send_getThesisDetail = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getThesisDetail', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchAPIProxy_getThesisDetail_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchAPIProxyClient.prototype.recv_getThesisDetail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchAPIProxy_getThesisDetail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getThesisDetail failed: unknown result');
};
SearchAPIProxyClient.prototype.getMagazineDetail = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getMagazineDetail(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMagazineDetail(id);
  }
};

SearchAPIProxyClient.prototype.send_getMagazineDetail = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getMagazineDetail', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchAPIProxy_getMagazineDetail_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchAPIProxyClient.prototype.recv_getMagazineDetail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchAPIProxy_getMagazineDetail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMagazineDetail failed: unknown result');
};
SearchAPIProxyClient.prototype.getPatentDetail = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getPatentDetail(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPatentDetail(id);
  }
};

SearchAPIProxyClient.prototype.send_getPatentDetail = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPatentDetail', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchAPIProxy_getPatentDetail_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchAPIProxyClient.prototype.recv_getPatentDetail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchAPIProxy_getPatentDetail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPatentDetail failed: unknown result');
};
SearchAPIProxyClient.prototype.find4related4expert = function(query, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_find4related4expert(query);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_find4related4expert(query);
  }
};

SearchAPIProxyClient.prototype.send_find4related4expert = function(query) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('find4related4expert', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchAPIProxy_find4related4expert_args();
  args.query = query;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchAPIProxyClient.prototype.recv_find4related4expert = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchAPIProxy_find4related4expert_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('find4related4expert failed: unknown result');
};
SearchAPIProxyProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
SearchAPIProxyProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

SearchAPIProxyProcessor.prototype.process_searcher = function(seqid, input, output) {
  var args = new SearchAPIProxy_searcher_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.searcher.length === 5) {
    Q.fcall(this._handler.searcher, args.cl, args.query, args.pageNum, args.highlight, args.userId)
      .then(function(result) {
        var result = new SearchAPIProxy_searcher_result({success: result});
        output.writeMessageBegin("searcher", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("searcher", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.searcher(args.cl, args.query, args.pageNum, args.highlight, args.userId, function (err, result) {
      if (err == null) {
        var result = new SearchAPIProxy_searcher_result((err != null ? err : {success: result}));
        output.writeMessageBegin("searcher", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("searcher", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchAPIProxyProcessor.prototype.process_getThesisDetail = function(seqid, input, output) {
  var args = new SearchAPIProxy_getThesisDetail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getThesisDetail.length === 1) {
    Q.fcall(this._handler.getThesisDetail, args.id)
      .then(function(result) {
        var result = new SearchAPIProxy_getThesisDetail_result({success: result});
        output.writeMessageBegin("getThesisDetail", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getThesisDetail", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getThesisDetail(args.id, function (err, result) {
      if (err == null) {
        var result = new SearchAPIProxy_getThesisDetail_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getThesisDetail", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getThesisDetail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchAPIProxyProcessor.prototype.process_getMagazineDetail = function(seqid, input, output) {
  var args = new SearchAPIProxy_getMagazineDetail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMagazineDetail.length === 1) {
    Q.fcall(this._handler.getMagazineDetail, args.id)
      .then(function(result) {
        var result = new SearchAPIProxy_getMagazineDetail_result({success: result});
        output.writeMessageBegin("getMagazineDetail", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMagazineDetail", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getMagazineDetail(args.id, function (err, result) {
      if (err == null) {
        var result = new SearchAPIProxy_getMagazineDetail_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getMagazineDetail", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMagazineDetail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchAPIProxyProcessor.prototype.process_getPatentDetail = function(seqid, input, output) {
  var args = new SearchAPIProxy_getPatentDetail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPatentDetail.length === 1) {
    Q.fcall(this._handler.getPatentDetail, args.id)
      .then(function(result) {
        var result = new SearchAPIProxy_getPatentDetail_result({success: result});
        output.writeMessageBegin("getPatentDetail", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPatentDetail", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPatentDetail(args.id, function (err, result) {
      if (err == null) {
        var result = new SearchAPIProxy_getPatentDetail_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getPatentDetail", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPatentDetail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchAPIProxyProcessor.prototype.process_find4related4expert = function(seqid, input, output) {
  var args = new SearchAPIProxy_find4related4expert_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.find4related4expert.length === 1) {
    Q.fcall(this._handler.find4related4expert, args.query)
      .then(function(result) {
        var result = new SearchAPIProxy_find4related4expert_result({success: result});
        output.writeMessageBegin("find4related4expert", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("find4related4expert", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.find4related4expert(args.query, function (err, result) {
      if (err == null) {
        var result = new SearchAPIProxy_find4related4expert_result((err != null ? err : {success: result}));
        output.writeMessageBegin("find4related4expert", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("find4related4expert", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

