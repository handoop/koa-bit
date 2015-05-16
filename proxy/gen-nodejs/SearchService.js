//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./SearchService_types');
//HELPER FUNCTIONS AND STRUCTURES

SearchService_searcher_args = function(args) {
  this.cl = null;
  this.query = null;
  this.pageNum = null;
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
  }
};
SearchService_searcher_args.prototype = {};
SearchService_searcher_args.prototype.read = function(input) {
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
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchService_searcher_args.prototype.write = function(output) {
  output.writeStructBegin('SearchService_searcher_args');
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
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchService_searcher_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchService_searcher_result.prototype = {};
SearchService_searcher_result.prototype.read = function(input) {
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

SearchService_searcher_result.prototype.write = function(output) {
  output.writeStructBegin('SearchService_searcher_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchService_thItem_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
SearchService_thItem_args.prototype = {};
SearchService_thItem_args.prototype.read = function(input) {
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

SearchService_thItem_args.prototype.write = function(output) {
  output.writeStructBegin('SearchService_thItem_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchService_thItem_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchService_thItem_result.prototype = {};
SearchService_thItem_result.prototype.read = function(input) {
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

SearchService_thItem_result.prototype.write = function(output) {
  output.writeStructBegin('SearchService_thItem_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchService_maItem_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
SearchService_maItem_args.prototype = {};
SearchService_maItem_args.prototype.read = function(input) {
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

SearchService_maItem_args.prototype.write = function(output) {
  output.writeStructBegin('SearchService_maItem_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchService_maItem_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SearchService_maItem_result.prototype = {};
SearchService_maItem_result.prototype.read = function(input) {
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

SearchService_maItem_result.prototype.write = function(output) {
  output.writeStructBegin('SearchService_maItem_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
SearchServiceClient.prototype = {};
SearchServiceClient.prototype.seqid = function() { return this._seqid; }
SearchServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
SearchServiceClient.prototype.searcher = function(cl, query, pageNum, callback) {
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
    this.send_searcher(cl, query, pageNum);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_searcher(cl, query, pageNum);
  }
};

SearchServiceClient.prototype.send_searcher = function(cl, query, pageNum) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('searcher', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchService_searcher_args();
  args.cl = cl;
  args.query = query;
  args.pageNum = pageNum;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchServiceClient.prototype.recv_searcher = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchService_searcher_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('searcher failed: unknown result');
};
SearchServiceClient.prototype.thItem = function(id, callback) {
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
    this.send_thItem(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_thItem(id);
  }
};

SearchServiceClient.prototype.send_thItem = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('thItem', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchService_thItem_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchServiceClient.prototype.recv_thItem = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchService_thItem_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('thItem failed: unknown result');
};
SearchServiceClient.prototype.maItem = function(id, callback) {
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
    this.send_maItem(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_maItem(id);
  }
};

SearchServiceClient.prototype.send_maItem = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('maItem', Thrift.MessageType.CALL, this.seqid());
  var args = new SearchService_maItem_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SearchServiceClient.prototype.recv_maItem = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SearchService_maItem_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('maItem failed: unknown result');
};
SearchServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
SearchServiceProcessor.prototype.process = function(input, output) {
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

SearchServiceProcessor.prototype.process_searcher = function(seqid, input, output) {
  var args = new SearchService_searcher_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.searcher.length === 3) {
    Q.fcall(this._handler.searcher, args.cl, args.query, args.pageNum)
      .then(function(result) {
        var result = new SearchService_searcher_result({success: result});
        output.writeMessageBegin("searcher", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new SearchService_searcher_result(err);
        output.writeMessageBegin("searcher", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.searcher(args.cl, args.query, args.pageNum,  function (err, result) {
      var result = new SearchService_searcher_result((err != null ? err : {success: result}));
      output.writeMessageBegin("searcher", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchServiceProcessor.prototype.process_thItem = function(seqid, input, output) {
  var args = new SearchService_thItem_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.thItem.length === 1) {
    Q.fcall(this._handler.thItem, args.id)
      .then(function(result) {
        var result = new SearchService_thItem_result({success: result});
        output.writeMessageBegin("thItem", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new SearchService_thItem_result(err);
        output.writeMessageBegin("thItem", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.thItem(args.id,  function (err, result) {
      var result = new SearchService_thItem_result((err != null ? err : {success: result}));
      output.writeMessageBegin("thItem", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

SearchServiceProcessor.prototype.process_maItem = function(seqid, input, output) {
  var args = new SearchService_maItem_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.maItem.length === 1) {
    Q.fcall(this._handler.maItem, args.id)
      .then(function(result) {
        var result = new SearchService_maItem_result({success: result});
        output.writeMessageBegin("maItem", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new SearchService_maItem_result(err);
        output.writeMessageBegin("maItem", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.maItem(args.id,  function (err, result) {
      var result = new SearchService_maItem_result((err != null ? err : {success: result}));
      output.writeMessageBegin("maItem", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

